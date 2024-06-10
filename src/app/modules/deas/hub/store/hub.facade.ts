import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HackerType } from '../../../../shared/constants/groupHackers.model';
import { ExtendedMitreAttackInfo } from '../models/hub.models';
import { getMitreData, filterMitreData } from './hub.actions';
import { mitreData$, mitreDataFilter$ } from './hub.selectors';

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
   * Observable stream of Mitre data filter from the store.
   * @type {Observable<HackerType>}
   */
  public mitreDataFilter$ = this.store.select(mitreDataFilter$);

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

  /**
   * Dispatches an action to filter Mitre data.
   * @param {ExtendedMitreAttackInfo[]} mitreAttackData The Mitre attack data to be filtered.
   * @param {HackerType} filter The type of hacker to filter the Mitre data by.
   */
  public filtreMitreData(mitreAttackData: ExtendedMitreAttackInfo[], filter: HackerType): void {
    this.store.dispatch(filterMitreData({ mitreAttackData, filter }));
  }
}
