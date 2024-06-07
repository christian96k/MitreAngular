import { MitreAttackInfo } from './../../../shared/model/mitre.model';
import { CommonModule, DOCUMENT } from '@angular/common';
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



const MODULES_HUB = [
  RouterModule,
  CommonModule
]

const DIRECTIVES_HUB = [
  TooltipDirective
]


@Component({
  selector: 'app-hub',
  standalone: true,
  imports: [
    ...MODULES_HUB,
    ...DIRECTIVES_HUB
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
    this.mitreHerarchyDataAPT28 = this.hubService.filterByActorRecursive(this.mitreHerarchyData, HACKERS.APT28);

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



}
