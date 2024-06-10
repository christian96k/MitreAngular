import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HackerType } from '../../../../shared/constants/groupHackers.model';
import { getMitreData } from './hub.actions';
import { mitreData$,  } from './hub.selectors';

/**
 * Facade service for the Hub module.
 * Provides a simplified interface for interacting with the Hub feature store.
 */
@Injectable({
  providedIn: 'root'
})
export class HubFacade {
  /**
   * Observable stream of Mitre data from the store.
   * @type {Observable<ExtendedMitreAttackInfo[] | null>}
   */
  public mitreData$ = this.store.select(mitreData$);

  /**
   * Initializes the HubFacade instance.
   * @param {Store} store The NgRx store instance.
   */
  constructor(private store: Store) {}

  /**
   * Dispatches an action to fetch Mitre data.
   */
  public getMitreData(filter:HackerType): void {
    this.store.dispatch(getMitreData({filter}));
  }
}
