import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, NavigationEnd, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of, takeUntil, } from "rxjs";
import { AuthService } from '@auth0/auth0-angular';
import { UserFacade } from "../modules/user/store/user.facade";
import { ROUTE } from "../../shared/routes/route.model";


@Injectable({
  providedIn: 'root',
})
/**
 * Guard for authenticating routes using Auth0.
 */
export class Auth0_Guard {
  /**
   * The router instance for navigation.
   * @type {Router}
   */
  private router: Router = inject(Router);

  /**
   * The authentication service for Auth0.
   * @type {AuthService}
   */
  public auth0Service: AuthService = inject(AuthService);

  /**
   * Determines whether the user can activate a route.
   * @param {ActivatedRouteSnapshot} data The data associated with the route.
   * @param {RouterStateSnapshot} state The state of the router.
   * @returns {Observable<boolean>} An observable indicating whether the user can activate the route.
   */
  canActivate({ data }: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (localStorage.getItem('token')?.length) {
      return of(true);
    } else {
      this.router.navigateByUrl(`/${ROUTE.USER_AUTH}`);
      return of(true);
    }
  }
}
