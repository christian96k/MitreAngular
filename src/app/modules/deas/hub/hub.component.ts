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
import { ExtendedMitreAttackInfo } from './models/hub.models';
import { HubService } from './services/hub.service';
import { LoaderComponent } from '../../../libraries/components/loader/loader.component';
import { CardComponent } from '../../../libraries/components/card/card.component';
import { CardAction, CardConfig, CardIcon } from '../../../libraries/models/card.model';
import { ClusterComponent } from '../../../libraries/components/cluster/cluster.component';
import { ClusterConfig } from '../../../libraries/models/cluster.model';
import { MitreAttackComponent } from '../mitre-attack/mitre-attack.component';
import { HackerType } from '../../../shared/constants/groupHackers.model';



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
  public mitreDataInfo$: Observable<ExtendedMitreAttackInfo[] | null> = this.hubFacade.mitreData$;
  public mitreDataFilter$: Observable<HackerType> = this.hubFacade.mitreDataFilter$;


  // data set
  public mitreData: MitreAttackData|null = null;
  public mitreHerarchyData: ExtendedMitreAttackInfo[] = [];
  public mitreHerarchyDataAPT28: ExtendedMitreAttackInfo[] = [];


  public clusters: ClusterConfig[] = [];
  public hackerType = HackerType;


  constructor(
  ) {
    this.hubFacade.getMitreData();
  }


  // Subscription to the Mitre Data
  public mitraDataSubscription: Subscription = this.hubFacade.mitreData$.pipe(
    filter(Boolean),
    takeUntil(this.destroy$)
  ).subscribe((data: ExtendedMitreAttackInfo[]) => {
    this.mitreHerarchyData = data;
    console.log("tacticsWithTechniquesAndSubtechniquesAndUses", this.mitreHerarchyData);
    console.log("tacticsWithTechniquesAndSubtechniquesAndUsesFiltered", this.mitreHerarchyDataAPT28);
  });


  filter(hackerType:HackerType){
    this.hubFacade.filtreMitreData(this.mitreHerarchyData, hackerType);
  }

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



}
