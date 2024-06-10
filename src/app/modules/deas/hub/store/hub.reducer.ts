import { createReducer, on } from '@ngrx/store';
import { HackerType } from '../../../../shared/constants/groupHackers.model';
import { ExtendedMitreAttackInfo } from '../models/hub.models';
import { getMitreDataSuccess, filterMitreDataSuccess } from './hub.actions';

/**
 * The key for the Hub feature state within the NgRx store.
 * @type {string}
 */
export const HubListFeatureKey = 'hub';

/**
 * Interface representing the state of the Hub feature.
 * @interface
 */
export interface HubState {
  data: ExtendedMitreAttackInfo[] | null; // Mitre attack data
  filter: HackerType; // Hacker type filter
}

/**
 * Initial state for the Hub feature.
 * @type {HubState}
 */
const initialState: HubState = {
  data: null,
  filter: HackerType.GENERIC // Default hacker type filter
};

/**
 * Reducer function for the Hub feature.
 * @function
 * @param {HubState} state The current state of the Hub feature.
 * @param {*} action The action dispatched to the reducer.
 * @returns {HubState} The new state of the Hub feature after applying the action.
 */
export const hubReducer = createReducer(
  initialState,
  on(getMitreDataSuccess, (state, { mitreAttackData, filter }) => ({ ...state, data: mitreAttackData, filter: filter })),
  on(filterMitreDataSuccess, (state, { mitreAttackData, filter }) => ({ ...state, data: mitreAttackData, filter: filter })),
);
