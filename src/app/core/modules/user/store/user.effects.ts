import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { UserService } from '../service/user.service';
import { login, loginSuccess } from './user.actions';

/**
 * Effects for managing user-related actions.
 */
@Injectable()
export class UserEffects {
  /**
   * Initializes the UserEffects instance.
   * @param {Actions} action$ Observable stream of actions dispatched in the application.
   * @param {Router} router The router instance for navigation.
   * @param {UserService} userService The user service for managing user state.
   */
  constructor(
    private action$: Actions,
    private router: Router,
    private userService: UserService
  ) {}

  /**
   * Effect triggered when a login action is dispatched.
   * @type {Observable<Action>}
   */
  public login$ = createEffect(() =>
    this.action$.pipe(
      ofType(login),
      switchMap(({ user }) =>
        this.userService.login(user).pipe(
          map((user: UserModel) => {
            // Dispatch loginSuccess action with the logged-in user
            return loginSuccess({ user });
          })
        )
      )
    )
  );
}
