import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { login } from './user.actions';
import { user$ } from './user.selectors';

/**
 * Facade service for managing user-related state and actions.
 */
@Injectable({ providedIn: 'root' })
export class UserFacade {
  /**
   * Observable stream of the current user information.
   * @type {Observable<UserModel>}
   */
  public user$: Observable<UserModel> = this.store.select(user$).pipe(filter(Boolean));

  /**
   * Initializes the UserFacade instance.
   * @param {Store} store The NgRx store for managing application state.
   */
  constructor(private store: Store) {}

  /**
   * Dispatches a login action to authenticate the user.
   * @param {UserModel} user The user object containing information from the authentication provider.
   * @returns {void}
   */
  public login(user: UserModel): void {
    this.store.dispatch(login({ user }));
  }
}
