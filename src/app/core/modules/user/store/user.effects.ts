import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map } from "rxjs";
import { login, loginSuccess } from "./user.actions";
import { UserService } from "../service/user.service";
import { UserModel } from "../models/user.model";

@Injectable()
export class UserEffects {

  constructor(
    private action$: Actions,
    private router: Router,
    private userService: UserService
  ) {}

  public login$ = createEffect(() =>
    this.action$.pipe(
      ofType(login),
      switchMap(({ user }) =>
        this.userService.login(user).pipe(
          map(( user : UserModel ) => {
            return loginSuccess(
              { user }
            );
          })
        )
      )
    )
  );
}
