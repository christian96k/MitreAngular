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
  isSidebarVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  private http = inject(HttpClient);
  private userFacade = inject(UserFacade);
  public authService = inject(AuthService);
  private document = inject(DOCUMENT);

  public login(user: UserModel): Observable<UserModel> {
    return of(user);
  }


  public setUserInfo(user:User):void{
    const userInfo: UserModel = {
      given_name:user.given_name ?? '',
      family_name:user.family_name ?? '',
      nickname:user.nickname ?? '',
      name:user.name ?? '',
      picture:user.picture ?? '',
      updated_at:user.updated_at ?? '',
      email:user.email ?? '',
      email_verified: user.email_verified ?? false,
      sub:user.sub ?? ''
    }
    this.userFacade.login(userInfo);
  }

  public setUserLogOut():void{
    localStorage.removeItem('token');
    this.authService.logout({ logoutParams: { returnTo: this.document.location.origin } })
  }

  public setUserError(error: Auth0Error): void {
    this.authService.loginWithRedirect();
    console.error('Auth_0 error:::', error);
    // TODO: Add error page in case we need a dedicated UI
  }


}
