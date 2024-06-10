import {
  HackersMock,
  HackerType,
} from './../../../shared/constants/groupHackers.model';
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

/**
 * Array containing components related to the UI kit Mitre Attack Component.
 * @type {Array<Components>}
 */
const UI_MITRE_ATTACK = [
  ChipComponent,
  CardComponent,
  ChipsetComponent,
  ClusterComponent,
  LoaderComponent,
];

/**
 * Component for displaying Mitre Attack information.
 */
@Component({
  selector: 'app-mitre-attack',
  standalone: true,
  imports: [...UI_MITRE_ATTACK, CommonModule],
  templateUrl: './mitre-attack.component.html',
  styleUrl: './mitre-attack.component.scss',
})
/**
 * Represents the Mitre Attack Component.
 */
/**
 * Represents the Mitre Attack Component.
 */
export class MitreAttackComponent {
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
   * Service for Mitre Attack operations.
   * @public
   */
  public mitreAttackService = inject(MitreAttackService);

  /**
   * Subject for managing the destruction of observables.
   * @private
   */
  private destroy$ = new Subject<void>();

  /**
   * Observable that provides the extended Mitre Attack information or null.
   * @public
   */
  public mitreAttackInfo$: Observable<ExtendedMitreAttackInfo[] | null> =
    this.hubFacade.mitreData$;

  /**
   * Current hacker data being used for attacks.
   * @public
   */
  public attackHacker = HackersMock.APT28;

  /**
   * Configurations for clusters.
   * @public
   */
  public clusters: ClusterConfig[] = [];

  /**
   * Configurations for cards.
   * @public
   */
  public cards: CardConfig[] = [];

  /**
   * Filtered Mitre Attack data.
   * @public
   */
  public mitreDataFiltered: ExtendedMitreAttackInfo[] = [];

  /**
   * Mock configuration for a chip.
   * @public
   */
  public chipConfig = {
    label: 'Identified as malicious actor',
    isDark: true,
    icon: 'icon-virus',
  };

  /**
   * hackerType configuration for filter.
   * @public
   */
  public hackerType = HackerType;

  // DEMO: filters
  /**
   * mitreFilters configuration optional.
   * @public
   */
  public mitreFilters: boolean = true;


  /**
   * Subscription to the Mitre Data.
   * Updates the filtered Mitre data and clusters based on the received data.
   * @public
   */
  public mitraDataSubscription: Subscription = this.hubFacade.mitreData$
    .pipe(filter(Boolean), takeUntil(this.destroy$))
    .subscribe((data: ExtendedMitreAttackInfo[]) => {
      this.mitreDataFiltered = data;
      this.cards = [];
      this.clusters = this.mitreDataFiltered.map(
        (mitreAttackInfo: ExtendedMitreAttackInfo) => this.mitreAttackService.createMitreCluster(mitreAttackInfo, this)
      );
    });


  /**
   * Filters the Mitre Data based on the hacker type.
   * @param event The type of select event filter.
   * @public
   */
  public filter(event: Event): void {
    const hackerType = (event.target as HTMLSelectElement).value as HackerType;
    this.attackHacker = {...HackersMock[hackerType]};
    this.hubFacade.getMitreData(hackerType);
  }

  /**
   * Selects a Mitre cluster and updates the active state of the clusters and cards.
   * @param cluster - The cluster to select.
   * @param mitreComponent - The MitreAttackComponent instance.
   */
  public selectMitreCluster(
    cluster: ClusterConfig,
    mitreComponent: MitreAttackComponent
  ): void {
    this.clusters = this.clusters.map((_cluster) => {
      if (_cluster.id === cluster.id) {
        return { ..._cluster, active: !cluster.active, opaque: false };
      } else {
        const someActive = this.clusters.some((cluster) => cluster.active);
        return {
          ..._cluster,
          active: false,
          opaque: !someActive ? true : false,
        };
      }
    });

    if (cluster.techniques?.length)
      this.cards = !cluster.active
        ? cluster.techniques.map((technique: ExtendedMitreAttackInfo) =>
            this.mitreAttackService.createMitreTechniques(
              technique,
              mitreComponent
            )
          )
        : [];
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
  }



}
