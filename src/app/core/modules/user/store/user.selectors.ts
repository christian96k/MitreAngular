import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState, authFeatureKey } from './user.reducer';

/**
 * Selector function to retrieve the user feature state.
 * @type {MemoizedSelector<object, UserState>}
 */
export const getUserFeature = createFeatureSelector<UserState>(authFeatureKey);

/**
 * Selector function to retrieve the current user from the user feature state.
 * @type {MemoizedSelector<object, UserModel | null>}
 */
export const user$ = createSelector(getUserFeature, ({ user }) => user);
