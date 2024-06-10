import { createAction, props } from '@ngrx/store';
import { UserModel } from '../models/user.model';

/**
 * Action to initiate the user login process.
 * @param {UserModel} user The user object containing information from the authentication provider.
 * @returns {Action} The login action with the user information.
 */
export const login = createAction(
  '[Auth 0 User] Login',
  props<{ user: UserModel }>()
);

/**
 * Action dispatched when user login is successful.
 * @param {UserModel} user The user object containing information from the authentication provider.
 * @returns {Action} The login success action with the user information.
 */
export const loginSuccess = createAction(
  '[Auth 0 User] Login Success',
  props<{ user: UserModel }>()
);
