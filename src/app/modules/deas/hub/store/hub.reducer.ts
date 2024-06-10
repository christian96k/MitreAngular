import { createReducer, on } from "@ngrx/store";
import { MitreAttackData } from "../../../../shared/model/mitre.model";
import { getMitreDataSuccess } from "./hub.actions";
import { ExtendedMitreAttackInfo } from "../models/hub.models";

/**
 * Key representing the feature module for the hub list.
 * @remarks
 * This key is used to identify the hub list module in the NgRx store.
 */
export const HubListFeatureKey = 'hub';


export interface HubState {
  data: ExtendedMitreAttackInfo[] | null;
}

const initialState: HubState = {
  data: null
};

export const hubReducer = createReducer(
  initialState,
  on(getMitreDataSuccess, (state, { mitreAttackData }) => ({ ...state, data: mitreAttackData })),
);
