import { createReducer, on } from "@ngrx/store";
import { filterMitreDataSuccess, getMitreDataSuccess } from "./hub.actions";
import { ExtendedMitreAttackInfo } from "../models/hub.models";
import { HackerType } from "../../../../shared/constants/groupHackers.model";

/**
 * Key representing the feature module for the hub list.
 * @remarks
 * This key is used to identify the hub list module in the NgRx store.
 */
export const HubListFeatureKey = 'hub';

export interface HubState {
  data: ExtendedMitreAttackInfo[] | null;
  filter: HackerType;

}

const initialState: HubState = {
  data: null,
  filter: HackerType.APT28
};

export const hubReducer = createReducer(
  initialState,
  on(getMitreDataSuccess, (state, { mitreAttackData }) => ({ ...state, data: mitreAttackData })),
  on(filterMitreDataSuccess, (state, { mitreAttackData, filter }) => ({ ...state, data: mitreAttackData, filter: filter })),

);
