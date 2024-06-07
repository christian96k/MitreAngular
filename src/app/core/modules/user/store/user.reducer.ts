import { createReducer, on } from "@ngrx/store";
import { loginSuccess } from "./user.actions";
import { UserModel } from "../models/user.model";

export const authFeatureKey = 'auth';

export interface UserState {
  user: UserModel | null;
}

const initialState: UserState = {
  user: null,
}

export const userReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user } ) => ({ ...state,  user})),
);
