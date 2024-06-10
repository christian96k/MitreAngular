import { Routes } from '@angular/router';
import { APP, APP_CALLBACK, ROUTE } from './shared/routes/route.model';
import { UserLoginSystemComponent } from './core/modules/user/user-login-system/user-login-system.component';
import { AppComponent } from './app.component';
import { Auth0_Guard } from './core/guards/auth0-guard';
import { routesDeas } from './modules/deas/deas.routes';

/**
 * Application routes configuration.
 * Defines the routes for the Angular application.
 * @type {Routes}
 */
export const routes: Routes = [
  /**
   * Default route that redirects to the DEAS path.
   * @type {Route}
   */
  { path: '', redirectTo: APP.DEAS, pathMatch: 'full' },

  /**
   * Route for the Auth0 callback.
   * @type {Route}
   */
  {
    path: APP_CALLBACK.AUTH0,
    component: UserLoginSystemComponent
  },

  /**
   * Route for the DEAS path.
   * Includes child routes defined in `routesDeas`.
   * Protected by Auth0 guard.
   * @type {Route}
   */
  {
    path: APP.DEAS,
    canActivate: [Auth0_Guard],
    component: AppComponent,
    children: [...routesDeas],
  },

  /**
   * Route for user authentication.
   * @type {Route}
   */
  {
    path: ROUTE.USER_AUTH,
    component: UserLoginSystemComponent
  },

  /**
   * Wildcard route that redirects to the DEAS path for any unmatched paths.
   * @type {Route}
   */
  { path: '**', redirectTo: APP.DEAS },
];

