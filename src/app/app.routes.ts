import { Routes } from '@angular/router';
import { APP, APP_CALLBACK, ROUTE } from './shared/routes/route.model';
import { UserLoginSystemComponent } from './core/modules/user/user-login-system/user-login-system.component';
import { AppComponent } from './app.component';
import { Auth0_Guard } from './core/guards/auth0-guard';
import { routesDeas } from './modules/deas/deas.routes';

// TODO: add guard user login system Cognito AWS
export const routes: Routes = [
  { path: '', redirectTo: APP.DEAS, pathMatch: 'full' },
  {
    path: APP_CALLBACK.AUTH0,
    component: UserLoginSystemComponent
  },
  {
    path: APP.DEAS,
    canActivate:[Auth0_Guard],
    component:AppComponent,
    children: [...routesDeas],
  },
  {
  path: ROUTE.USER_AUTH,
  component: UserLoginSystemComponent
  },


  { path: '**', redirectTo: APP.DEAS },

];
