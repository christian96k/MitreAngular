import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { MitreAttackData, MitreAttackInfo } from '../../../../shared/model/mitre.model';
import { environment } from '../../../../../environments/environment';
import { ENDPOINTS } from '../../../../shared/constants/endpoints';
import { ExtendedMitreAttackInfo } from '../models/hub.models';



@Injectable({
  providedIn: 'root'
})
export class HubService {

  private http = inject(HttpClient);


  public getMitreData$(): Observable<MitreAttackData> {
    return this.http.get<MitreAttackData>(`${environment.apiUrl}/${ENDPOINTS.MITRE}`);
  }



  public mapMitreData(data: MitreAttackData): ExtendedMitreAttackInfo[] {
    const tactics: MitreAttackInfo[] = data.objects.filter(mitreInfo => mitreInfo.type === 'x-mitre-tactic');
    const techniques: MitreAttackInfo[] = data.objects.filter(mitreInfo => mitreInfo.type === 'attack-pattern' && !mitreInfo.x_mitre_is_subtechnique);
    const subtechniques: MitreAttackInfo[] = data.objects.filter(mitreInfo => mitreInfo.type === 'attack-pattern' && mitreInfo.x_mitre_is_subtechnique);

    // Creare una mappa delle relazioni subtechnique-of
    const subtechniqueMap: { [key: string]: MitreAttackInfo[] } = {};
    data.objects.forEach((mitreInfo) => {
      if (mitreInfo.relationship_type === 'subtechnique-of') {
        if (!subtechniqueMap[mitreInfo.target_ref]) {
          subtechniqueMap[mitreInfo.target_ref] = [];
        }
        const subtechnique = subtechniques.find(st => st.id === mitreInfo.source_ref);
        if (subtechnique) {
          subtechniqueMap[mitreInfo.target_ref].push(subtechnique);
        }
      }
    });

    // Creare una mappa delle entità "uses"
    const usesMap: { [key: string]: MitreAttackInfo[] } = {};
    data.objects.forEach((mitreInfo) => {
      if (mitreInfo.relationship_type === 'uses') {
        if (!usesMap[mitreInfo.target_ref]) {
          usesMap[mitreInfo.target_ref] = [];
        }
        const entity = data.objects.find(e => e.id === mitreInfo.source_ref);
        if (entity) {
          usesMap[mitreInfo.target_ref].push(entity);
        }
      }
    });

    // Creare una mappa delle tecniche e subtecniche
    const techniqueMap: { [key: string]: ExtendedMitreAttackInfo } = {};
    techniques.forEach((technique) => {
      const subtechniquesExtended = (subtechniqueMap[technique.id] || []).map((subtechnique) => ({
        ...subtechnique,
        uses: usesMap[subtechnique.id] || []
      }));
      const uses = usesMap[technique.id] || [];
      techniqueMap[technique.id] = {
        ...technique,
        subtechniques: subtechniquesExtended,
        uses
      };
    });

    // Creare una lista delle tattiche con le tecniche, subtecniche e entità "uses"
    const extendedMitreData: ExtendedMitreAttackInfo[] = tactics.map((tactic) => {
      const techniquesExtended = techniques.filter((technique) => {
        return technique.kill_chain_phases &&
        technique.kill_chain_phases.some(kcp => kcp.phase_name === tactic.x_mitre_shortname);
      }).map((technique) => techniqueMap[technique.id]);

      return {
        ...tactic,
        techniques: techniquesExtended,
        subtechniques: [],
        uses: []
      };
    });

    return extendedMitreData;
  }

  public filterByActorRecursive(data: ExtendedMitreAttackInfo[], actorName: string): ExtendedMitreAttackInfo[] {
    return data.map(item => {
      // Filtra subtecniche ricorsivamente
      const subtechniques = item.subtechniques ? this.filterByActorRecursive(item.subtechniques, actorName) : [];

      // Filtra le entità "uses"
      const uses = item.uses ? item.uses.filter(use => use.name === actorName) : [];

      // Filtra tecniche ricorsivamente
      const techniques = item.techniques ? item.techniques.map(technique => {
        const filteredSubtechniques = technique.subtechniques ? this.filterByActorRecursive(technique.subtechniques, actorName) : [];
        const filteredUses = technique.uses ? technique.uses.filter(use => use.name === actorName) : [];

        return {
          ...technique,
          subtechniques: filteredSubtechniques,
          uses: filteredUses
        };
      }).filter(technique => technique.subtechniques.length > 0 || technique.uses.length > 0) : [];

      return {
        ...item,
        subtechniques,
        uses,
        techniques
      };
    }).filter(item => {
      // Includi solo gli elementi che hanno subtecniche, uses o tecniche valide
      return (item.subtechniques && item.subtechniques.length > 0) ||
             (item.uses && item.uses.length > 0) ||
             (item.techniques && item.techniques.length > 0);
    });
  }
}
