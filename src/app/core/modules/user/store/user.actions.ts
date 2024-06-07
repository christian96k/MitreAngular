import { createAction, props } from "@ngrx/store";
import { UserModel } from "../models/user.model";


export const login = createAction('[Auth 0 User] Login', props<{ user: UserModel }>());
export const loginSuccess = createAction('[Auth 0 User] Login Success', props<{ user: UserModel }>());
