import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HubListFeatureKey, HubState } from './hub.reducer';

/**
 * Selector to retrieve the Hub feature state from the NgRx store.
 * @type {MemoizedSelector<object, HubState>}
 */
export const hubFeature = createFeatureSelector<HubState>(HubListFeatureKey);

/**
 * Selector to retrieve the Mitre data from the Hub feature state.
 * @type {MemoizedSelector<object, ExtendedMitreAttackInfo[] | null>}
 */
export const mitreData$ = createSelector(
  hubFeature,
  ({ data }) => data
);

/**
 * Selector to retrieve the Mitre data filter from the Hub feature state.
 * @type {MemoizedSelector<object, HackerType>}
 */
export const mitreDataFilter$ = createSelector(
  hubFeature,
  ({ filter }) => filter
);
