import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of, tap } from "rxjs";
import { Auth0Error, UserModel } from "../models/user.model";
import { AuthService, User } from "@auth0/auth0-angular";
import { UserFacade } from "../store/user.facade";
import { DOCUMENT } from "@angular/common";
export type ApiResponse<T> = {
  type: 'success' | 'error',
  handler: string ,
  value: T
};

@Injectable({
  providedIn: 'root',
})
export class UserService {

/**
 * The HttpClient instance for making HTTP requests.
 * @type {HttpClient}
 */
  private http: HttpClient = inject(HttpClient);

/**
 * The user facade service for managing user state.
 * @type {UserFacade}
 */
  private userFacade: UserFacade = inject(UserFacade);

/**
 * The authentication service for handling user authentication.
 * @type {AuthService}
 */
  public authService: AuthService = inject(AuthService);

/**
 * The document object representing the DOM document.
 * @type {Document}
 */
  private document: Document = inject(DOCUMENT);

/**
 * Logs in a user.
 * @param {UserModel} user The user to be logged in.
 * @returns {Observable<UserModel>} An observable of the logged-in user.
 */
  public login(user: UserModel): Observable<UserModel> {
    return of(user);
  }


  /**
 * Sets user information after successful login.
 * @param {User} user The user object containing information from the authentication provider.
 * @returns {void}
 */
public setUserInfo(user: User): void {
  const userInfo: UserModel = {
    given_name: user.given_name ?? '',
    family_name: user.family_name ?? '',
    nickname: user.nickname ?? '',
    name: user.name ?? '',
    picture: user.picture ?? '',
    updated_at: user.updated_at ?? '',
    email: user.email ?? '',
    email_verified: user.email_verified ?? false,
    sub: user.sub ?? ''
  };
  this.userFacade.login(userInfo);
}

/**
 * Logs out the current user.
 * @returns {void}
 */
public setUserLogOut(): void {
  localStorage.removeItem('token');
  this.authService.logout({ logoutParams: { returnTo: this.document.location.origin } });
}

/**
 * Handles user authentication error.
 * @param {Auth0Error} error The error object returned from the authentication service.
 * @returns {void}
 */
public setUserError(error: Auth0Error): void {
  // Redirects user to login page if there's an authentication error
  this.authService.loginWithRedirect();
  // Logs the error to the console
  console.error('Auth_0 error:::', error);
  // TODO: Add error page in case we need a dedicated UI
}



}
