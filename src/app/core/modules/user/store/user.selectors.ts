import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authFeatureKey, UserState } from "./user.reducer";

export const getUserFeature = createFeatureSelector<UserState>(authFeatureKey);

export const user$ = createSelector(getUserFeature, ({ user }) => user );
