import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HubListFeatureKey, HubState } from "./hub.reducer";

export const hubFeature = createFeatureSelector<HubState>(HubListFeatureKey);

export const mitreData$ = createSelector(
  hubFeature,
  ({ data }) => data
);

export const mitreDataFilter$ = createSelector(
  hubFeature,
  ({ filter }) => filter
);
