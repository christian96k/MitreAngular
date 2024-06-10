import { createAction, props } from '@ngrx/store';
import { HackerType } from '../../../../shared/constants/groupHackers.model';
import { ExtendedMitreAttackInfo } from '../models/hub.models';

/**
 * Action to initiate the retrieval of Mitre data.
 * @returns {Action} The get Mitre data action.
 */
export const getMitreData = createAction('[Get Mitre Data] Get Mitre Data',
  props<{filter: HackerType }>()
);

/**
 * Action dispatched when Mitre data retrieval is successful.
 * @param {ExtendedMitreAttackInfo[]} mitreAttackData The Mitre attack data retrieved.
 * @returns {Action} The get Mitre data success action with the retrieved Mitre attack data.
 */
export const getMitreDataSuccess = createAction(
  '[Get Mitre Data Success] Get Mitre Data success',
  props<{ mitreAttackData: ExtendedMitreAttackInfo[], filter: HackerType }>()
);

// /**
//  * Action to initiate the filtering of Mitre data.
//  * @param {ExtendedMitreAttackInfo[]} mitreAttackData The Mitre attack data to be filtered.
//  * @param {HackerType} filter The type of hacker to filter the Mitre data by.
//  * @returns {Action} The filter Mitre data action with the data to be filtered and the filter criteria.
//  */
// export const filterMitreData = createAction(
//   '[Filter Mitre Data] Filter Mitre Data',
//   props<{ mitreAttackData: ExtendedMitreAttackInfo[], filter: HackerType }>()
// );

// /**
//  * Action dispatched when Mitre data filtering is successful.
//  * @param {ExtendedMitreAttackInfo[]} mitreAttackData The filtered Mitre attack data.
//  * @param {HackerType} filter The type of hacker used for filtering.
//  * @returns {Action} The filter Mitre data success action with the filtered Mitre attack data and the filter criteria.
//  */
// export const filterMitreDataSuccess = createAction(
//   '[Filter Mitre Data Success] Filter Mitre Data success',
//   props<{ mitreAttackData: ExtendedMitreAttackInfo[], filter: HackerType }>()
// );
