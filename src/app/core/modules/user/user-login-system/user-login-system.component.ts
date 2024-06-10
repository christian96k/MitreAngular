import { Component, inject } from '@angular/core';
import { Subject,Subscription,takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { UserFacade } from '../store/user.facade';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { Auth0Error } from '../models/user.model';
import { UserService } from '../service/user.service';
import { APP } from '../../../../shared/routes/route.model';
import { LoaderComponent } from '../../../../libraries/components/loader/loader.component';

/**
 * Array of components used in the Deas component.
 * @type {Array<Components>}
 */
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
  /**
   * Subject used for destroying subscriptions.
   * @type {Subject<void>}
   */
  private destroy$: Subject<void> = new Subject<void>();

  /**
   * The router instance for navigation.
   * @type {Router}
   */
  private router: Router = inject(Router);

  /**
   * The document object representing the DOM document.
   * @type {Document}
   */
  public document: Document = inject(DOCUMENT);

  /**
   * The authentication service for handling user authentication.
   * @type {AuthService}
   */
  public authService: AuthService = inject(AuthService);

  /**
   * The user service for managing user state.
   * @type {UserService}
   */
  private userService: UserService = inject(UserService);

  /**
   * Initializes the AuthenticationManager instance.
   * Automatically called when an instance of AuthenticationManager is created.
   */
  constructor() {
    this.initialize();
  }

  /**
   * Subscribes to user authentication changes and performs necessary actions.
   * @type {Subscription}
   */
  public user$: Subscription = this.authService.user$.pipe(
    takeUntil(this.destroy$)
  ).subscribe((user) => {
    if (user) {
      try {
        this.authService.getAccessTokenSilently().pipe(
          takeUntil(this.destroy$)
        ).subscribe(
          token => {
            // Store access token in local storage
            localStorage.setItem('token', token);
            // Set user information
            this.userService.setUserInfo(user);
            // Redirect to the DEAS module
            this.router.navigateByUrl(`${APP.DEAS}`);
          },
        );
      } catch (error) {
        // Remove token from local storage
        localStorage.removeItem('token');
        // Handle authentication error
        this.userService.setUserError(error as Auth0Error);
      }
    }
  });

  /**
   * Initializes the authentication process.
   * @returns {void}
   */
  private initialize(): void {
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      // Redirect to login page if user is not authenticated
      if (!isAuthenticated)
        this.authService.loginWithRedirect();
    });
  }

}
