import { createReducer, on } from '@ngrx/store';
import { UserModel } from '../models/user.model';
import { loginSuccess } from './user.actions';

/**
 * Key used to access the user authentication feature state within the store.
 * @type {string}
 */
export const authFeatureKey = 'auth';

/**
 * Interface representing the user state.
 */
export interface UserState {
  user: UserModel | null;
}

/**
 * Initial state for the user feature.
 * @type {UserState}
 */
const initialState: UserState = {
  user: null,
};

/**
 * Reducer function to handle user-related actions and update the user state accordingly.
 * @type {Reducer<UserState, Action>}
 */
export const userReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => ({ ...state, user })),
);
