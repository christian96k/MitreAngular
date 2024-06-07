import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, NavigationEnd, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of, takeUntil, } from "rxjs";
import { AuthService } from '@auth0/auth0-angular';
import { UserFacade } from "../modules/user/store/user.facade";
import { ROUTE } from "../../shared/routes/route.model";


@Injectable({
  providedIn: 'root',
})
export class Auth0_Guard {
  private router = inject(Router);
  public auth0Service = inject(AuthService);

  canActivate({ data }: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if(localStorage.getItem('token')?.length)
      return of(true);
    else
      this.router.navigateByUrl(`/${ROUTE.USER_AUTH}`);
      return of(true);
  }
}
