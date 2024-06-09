import { MitreAttackInfo } from './../../../shared/model/mitre.model';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from '../../../core/modules/user/service/user.service';
import { RouterModule } from '@angular/router';
import { HubFacade } from './store/hub.facade';
import { filter, Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { MitreAttackData } from '../../../shared/model/mitre.model';
import { UserModel } from '../../../core/modules/user/models/user.model';
import { UserFacade } from '../../../core/modules/user/store/user.facade';
import { TooltipDirective } from '../../../libraries/directives/tooltip.directive';
import { HACKERS } from '../../../shared/constants/groupHackers.model';
import { ExtendedMitreAttackInfo } from './models/hub.models';
import { HubService } from './services/hub.service';
import { LoaderComponent } from '../../../libraries/components/loader/loader.component';
import { CardComponent } from '../../../libraries/components/card/card.component';
import { CardAction, CardConfig, CardIcon } from '../../../libraries/models/card.model';
import { MitreAttackComponent } from '../../../libraries/components/mitre-attack/mitre-attack.component';
import { ClusterComponent } from '../../../libraries/components/cluster/cluster.component';
import { ClusterConfig } from '../../../libraries/models/cluster.model';



const MODULES_HUB = [
  RouterModule,
  CommonModule
]

const DIRECTIVES_HUB = [
  TooltipDirective
]

const UI_KIT_HUB = [
  MitreAttackComponent,
  LoaderComponent,
  CardComponent,
  ClusterComponent
]



@Component({
  selector: 'app-hub',
  standalone: true,
  imports: [
    ...MODULES_HUB,
    ...DIRECTIVES_HUB,
    ...UI_KIT_HUB
  ],
  templateUrl: './hub.component.html',
  styleUrl: './hub.component.scss',
  providers: [HubFacade]
})
export class HubComponent {
  // user services
  private userService = inject(UserService);
  private userFacade = inject(UserFacade);

  // hub services
  private hubFacade = inject(HubFacade);
  public hubService  = inject(HubService);

  // obeservers
  private destroy$ = new Subject<void>();
  public userInfo$: Observable<UserModel> = this.userFacade.user$;
  public mitreDataInfo$: Observable<MitreAttackData | null> = this.hubFacade.mitreData$;

  // data set
  public mitreData: MitreAttackData|null = null;
  public mitreTactics:MitreAttackInfo[] = [];
  public mitreTechniques:MitreAttackInfo[] = [];
  public mitreSubTechniques:MitreAttackInfo[] = [];
  public mitreHerarchyData: ExtendedMitreAttackInfo[] = [];
  public mitreHerarchyDataAPT28: ExtendedMitreAttackInfo[] = [];


  public clusters: ClusterConfig[] = [];


  constructor(
  ) {
    this.hubFacade.getMitreData();
  }


  // Subscription to the Mitre Data
  public mitraDataSubscription: Subscription = this.hubFacade.mitreData$.pipe(
    filter(Boolean),
    takeUntil(this.destroy$)
  ).subscribe((data: MitreAttackData) => {

    this.mitreHerarchyData = this.hubService.mapMitreData(data);
    // this.mitreHerarchyDataAPT28 = this.hubService.filterByActorRecursive(this.mitreHerarchyData, HACKERS.APT28);


    this.clusters = this.mitreHerarchyData.map((mitreAttackInfo: ExtendedMitreAttackInfo) => this.createCluster(mitreAttackInfo));

    console.log("tacticsWithTechniquesAndSubtechniquesAndUses", this.mitreHerarchyData);
    console.log("tacticsWithTechniquesAndSubtechniquesAndUsesFiltered", this.mitreHerarchyDataAPT28);
  });


  // logout interaction
  public onLogout():void{
    this.userService.setUserLogOut();
  }

  // end lifecycle
  public ngOnDestroy(): void {
    this.destroy$.next();
  }



  public cardConfig:CardConfig = {
    header:{
      label: 'Tecnica:',
      class: '',
      value: 'Virus total Placeholder'
    },
    footer: [
      {
        icon: CardIcon.info,
        action: (actionType) => console.log('action_:::', actionType),
        actionType: CardAction.INFO
      },
      {
        icon: CardIcon.settings,
        action: (actionType) => console.log('action_:::', actionType),
        actionType: CardAction.SETTINGS
      }
    ]
  }

  private createCluster(mitreAttackInfo:ExtendedMitreAttackInfo):ClusterConfig{

    return{
      name: mitreAttackInfo.name,
      id: mitreAttackInfo.id,
      active: false,
      select: (mitreInfo:ClusterConfig) => this.onCluserSelect(mitreInfo),
      techniques: mitreAttackInfo.techniques,
      uses: mitreAttackInfo.uses,
      externalID: mitreAttackInfo.external_references[0].external_id,
      size: 7
    }
  }

  private onCluserSelect(cluster: ClusterConfig): void {
    this.clusters = this.clusters.map((_cluster) => _cluster.id === cluster.id ? { ..._cluster, active: !_cluster.active } : _cluster);
  }

}
