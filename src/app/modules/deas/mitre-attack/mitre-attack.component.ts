import { HackersMock, HackerType } from './../../../shared/constants/groupHackers.model';
import { Component, inject } from '@angular/core';
import { ChipComponent } from '../../../libraries/components/chip/chip.component';
import { CardComponent } from '../../../libraries/components/card/card.component';
import { ChipsetComponent } from '../../../libraries/components/chip-set/chip-set.component';
import { ClusterComponent } from '../../../libraries/components/cluster/cluster.component';
import { ClusterConfig } from '../../../libraries/models/cluster.model';
import { Observable, Subject, Subscription, filter, takeUntil } from 'rxjs';
import { ExtendedMitreAttackInfo } from '../hub/models/hub.models';
import { HubService } from '../hub/services/hub.service';
import { HubFacade } from '../hub/store/hub.facade';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../../libraries/components/loader/loader.component';
import { CardConfig } from '../../../libraries/models/card.model';
import { MitreAttackService } from './services/mitre-attack.service';



const UI_MITRE_ATTACK = [
  ChipComponent,
  CardComponent,
  ChipsetComponent,
  ClusterComponent,
  LoaderComponent,
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
  public mitreAttackService  = inject(MitreAttackService);


  // obeservers
  private destroy$ = new Subject<void>();
  public mitreAttackInfo$: Observable<ExtendedMitreAttackInfo[] | null> = this.hubFacade.mitreData$;


  // data set
  public attackHacker = HackersMock.GENERIC;
  public clusters: ClusterConfig[] = [];
  public cards: CardConfig[] = [];
  public mitreDataFiltered: ExtendedMitreAttackInfo[] = [];


  // mock
  public chipConfig = { label:'Identificato come attore malevolo', isDark:true, icon:'virus'}


  // Subscription to the Mitre Data
  public mitraDataSubscription: Subscription = this.hubFacade.mitreData$.pipe(
    filter(Boolean),
    takeUntil(this.destroy$)
  ).subscribe((data: ExtendedMitreAttackInfo[]) => {
    this.mitreDataFiltered = data;
    this.clusters = this.mitreDataFiltered.map((mitreAttackInfo: ExtendedMitreAttackInfo) => this.mitreAttackService.createMitreCluster(mitreAttackInfo, this));
  });

  public filteDataSubscription: Subscription = this.hubFacade.mitreDataFilter$.pipe(
    filter(Boolean),
    takeUntil(this.destroy$)
  ).subscribe((filter: HackerType) => {
    this.attackHacker = HackersMock[filter];
  });




  public selectMitreCluster(cluster: ClusterConfig, mitreComponent: MitreAttackComponent): void {
    this.clusters = this.clusters.map((_cluster) => {
      if (_cluster.id === cluster.id) {
        return { ..._cluster, active: !cluster.active, opaque:  false };
      } else {
        const someActive = this.clusters.some((cluster) => cluster.active);
        return { ..._cluster, active: false, opaque: !someActive ? true: false };
      }
    });

    if(cluster.techniques?.length )
      this.cards = !cluster.active ? cluster.techniques.map((technique: ExtendedMitreAttackInfo) => this.mitreAttackService.createMitreTechniques(technique, mitreComponent)) : [];

  }



}
