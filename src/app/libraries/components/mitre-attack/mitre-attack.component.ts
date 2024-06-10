import { Component, inject } from '@angular/core';
import { ChipComponent } from '../chip/chip.component';
import { CardComponent } from '../card/card.component';
import { ChipsetComponent } from '../chip-set/chip-set.component';
import { ClusterComponent } from '../cluster/cluster.component';
import { ClusterConfig } from '../../models/cluster.model';
import { Observable, Subject, Subscription, filter, takeUntil } from 'rxjs';
import { ExtendedMitreAttackInfo } from '../../../modules/deas/hub/models/hub.models';
import { HubService } from '../../../modules/deas/hub/services/hub.service';
import { HubFacade } from '../../../modules/deas/hub/store/hub.facade';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';
import { APT28, HACKERS } from '../../../shared/constants/groupHackers.model';
import { CardAction, CardConfig, CardIcon } from '../../models/card.model';


const UI_MITRE_ATTACK = [
  ChipComponent,
  CardComponent,
  ChipsetComponent,
  ClusterComponent,
  LoaderComponent
]

@Component({
  selector: 'app-mitre-attack',
  standalone: true,
  imports: [
    ...UI_MITRE_ATTACK,
    CommonModule
  ],
  templateUrl: './mitre-attack.component.html',
  styleUrl: './mitre-attack.component.scss'
})
export class MitreAttackComponent {


  //  services
  private hubFacade = inject(HubFacade);
  public hubService  = inject(HubService);

  // obeservers
  private destroy$ = new Subject<void>();
  public mitreAttackInfo$: Observable<ExtendedMitreAttackInfo[] | null> = this.hubFacade.mitreData$;


  // data set
  public attackHacker = APT28;
  public clusters: ClusterConfig[] = [];
  public cards: CardConfig[] = [];
  public mitreDataFiltered: ExtendedMitreAttackInfo[] = [];

  public techniques: ExtendedMitreAttackInfo[] = [];




  // mock
  public chipConfig = {label:'Identificato come attore malevolo', isDark:true, icon:'virus'}


  // Subscription to the Mitre Data
  public mitraDataSubscription: Subscription = this.hubFacade.mitreData$.pipe(
    filter(Boolean),
    takeUntil(this.destroy$)
  ).subscribe((data: ExtendedMitreAttackInfo[]) => {

    this.mitreDataFiltered = this.hubService.filterByActorRecursive(data, HACKERS.APT28);
    this.clusters = this.mitreDataFiltered.map((mitreAttackInfo: ExtendedMitreAttackInfo) => this.createMitreCluster(mitreAttackInfo));
  });


  private createMitreCluster(mitreAttackInfo:ExtendedMitreAttackInfo):ClusterConfig{
    return{
      name: mitreAttackInfo.name,
      id: mitreAttackInfo.id,
      active: false,
      select: (mitreInfo:ClusterConfig) => this.selectMitreCluster(mitreInfo),
      techniques: mitreAttackInfo.techniques,
      uses: mitreAttackInfo.uses,
      externalID: mitreAttackInfo.external_references[0].external_id,
      opaque: false,
      size: 7
    }
  }


  private createMitreTechniques(mitreAttackInfo:ExtendedMitreAttackInfo):CardConfig{
    return{
      header:{
        label: mitreAttackInfo.name,
        value: mitreAttackInfo.external_references[0].external_id,
      },
      footer:[
        {
          icon: CardIcon.info,
          actionType: CardAction.INFO,
          action: (actionType:CardAction) => console.log('action', actionType)
        },
        {
          icon: CardIcon.settings,
          actionType: CardAction.SETTINGS,
          action: (actionType:CardAction) => console.log('action', actionType)
        }
      ]

    }
  }



  private selectMitreCluster(cluster: ClusterConfig): void {
    this.clusters = this.clusters.map((_cluster) => {
      if (_cluster.id === cluster.id) {
        return { ..._cluster, active: !cluster.active, opaque:  false };
      } else {
        const someActive = this.clusters.some((cluster) => cluster.active);
        return { ..._cluster, active: false, opaque: !someActive ? true: false };
      }
    });

    this.techniques = cluster.techniques || [];

    if(cluster.techniques?.length )
      this.cards = !cluster.active ? cluster.techniques.map((technique: ExtendedMitreAttackInfo) => this.createMitreTechniques(technique)) : [];
  }

}
