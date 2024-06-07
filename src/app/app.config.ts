import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient} from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { UserEffects } from './core/modules/user/store/user.effects';
import { userReducer } from './core/modules/user/store/user.reducer';
import { auth0Providers } from './core/providers/auth0.providers';
import { provideAnimations } from '@angular/platform-browser/animations';
import { hubReducer} from './modules/deas/hub/store/hub.reducer';
import { HubEffects } from './modules/deas/hub/store/hub.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    auth0Providers,
    provideRouter(routes),
    provideHttpClient(),
    // provideHttpClient(withInterceptors([apiInterceptor])),

    provideStore({ auth: userReducer, hub: hubReducer }),
    provideEffects([ UserEffects, HubEffects]),
    provideStoreDevtools(),
    provideAnimations(),
  ]
};
