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
import { ClusterComponent } from '../../../libraries/components/cluster/cluster.component';
import { ClusterConfig } from '../../../libraries/models/cluster.model';
import { MitreAttackComponent } from '../mitre-attack/mitre-attack.component';
import { HackerType } from '../../../shared/constants/groupHackers.model';



/**
 * Array of modules used in the hub component.
 * @type {Array<Modules>}
 */
const MODULES_HUB = [
  RouterModule,
  CommonModule
]

/**
 * Array of directives used in the Hub component.
 */
const DIRECTIVES_HUB = [
  TooltipDirective
]

/**
 * Array containing components related to the UI kit hub.
 * @type {Array<Components>}
 */
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
/**
 * Represents the Hub component.
 */
export class HubComponent {
  /**
   * User service for managing user-related operations.
   * @private
   */
  private userService = inject(UserService);

  /**
   * Facade for interacting with the user store.
   * @private
   */
  private userFacade = inject(UserFacade);

  /**
   * Facade for interacting with the Hub module store.
   * @private
   */
  private hubFacade = inject(HubFacade);

  /**
   * Hub service for Hub-specific operations.
   * @public
   */
  public hubService = inject(HubService);

  /**
   * Subject for managing the destruction of observables.
   * @private
   */
  private destroy$ = new Subject<void>();

  /**
   * Observable that provides the current user's information.
   * @public
   */
  public userInfo$: Observable<UserModel> = this.userFacade.user$;

  /**
   * Observable that provides the extended Mitre Attack information or null.
   * @public
   */
  public mitreDataInfo$: Observable<ExtendedMitreAttackInfo[] | null> = this.hubFacade.mitreData$;


  /**
   * Current Mitre Attack data.
   * @public
   */
  public mitreData: MitreAttackData | null = null;

  /**
   * Hierarchy of extended Mitre Attack data.
   * @public
   */
  public mitreHerarchyData: ExtendedMitreAttackInfo[] = [];

  /**
   * Configurations for clusters.
   * @public
   */
  public clusters: ClusterConfig[] = [];

  /**
   * Enumeration of hacker types.
   * @public
   */
  public hackerType = HackerType;

  constructor() {
    this.hubFacade.getMitreData(HackerType.APT28);
  }

  /**
   * Subscription to the Mitre Data.
   * @public
   */
  public mitraDataSubscription: Subscription = this.hubFacade.mitreData$.pipe(
    filter(Boolean),
    takeUntil(this.destroy$)
  ).subscribe((data: ExtendedMitreAttackInfo[]) => {
    this.mitreHerarchyData = data;
  });

  /**
   * Handles the logout interaction.
   * @public
   */
  public onLogout(): void {
    this.userService.setUserLogOut();
  }

  /**
   * Lifecycle hook that destroys the component.
   * @public
   */
  public ngOnDestroy(): void {
    this.destroy$.next();
  }



}
