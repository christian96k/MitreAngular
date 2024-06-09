import { Component, inject } from '@angular/core';
import { Subject,takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { UserFacade } from '../store/user.facade';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { Auth0Error } from '../models/user.model';
import { UserService } from '../service/user.service';
import { APP } from '../../../../shared/routes/route.model';
import { LoaderComponent } from '../../../../libraries/components/loader/loader.component';


const UI_USER_LOGIN = [
  LoaderComponent
];

@Component({
  selector: 'app-user-login-system',
  standalone: true,
  imports: [
    ...UI_USER_LOGIN,
    CommonModule
  ],
  templateUrl: './user-login-system.component.html',
  styleUrls: ['./user-login-system.component.scss'],
  providers: [
    UserFacade
  ]
})
export class UserLoginSystemComponent {
  private destroy$ = new Subject<void>();
  private router = inject(Router);
  public document = inject(DOCUMENT);
  public authService = inject(AuthService);
  private userService = inject(UserService);

  constructor() {
    this.initialize();
  }

  public user$ = this.authService.user$.pipe(
    takeUntil(this.destroy$)
  ).subscribe((user) => {
    if(user){
      try {
        this.authService.getAccessTokenSilently().pipe(
          takeUntil(this.destroy$)
        ).subscribe(
          token => {
            localStorage.setItem('token', token);
            this.userService.setUserInfo(user);
            this.router.navigateByUrl(`${APP.DEAS}`);
          },
        );
      } catch (error) {
        localStorage.removeItem('token');
        this.userService.setUserError(error as Auth0Error);
      }
    }
  })

  private initialize() {
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      if (!isAuthenticated)
        this.authService.loginWithRedirect();
    });
  }

}
