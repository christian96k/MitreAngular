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

/**
 * Configuration object for the application.
 */
/**
 * Application configuration object that provides essential services and configuration for the Angular application.
 * @type {ApplicationConfig}
 */
export const appConfig: ApplicationConfig = {
  providers: [
    /**
     * Provides authentication services using Auth0.
     * @type {Provider[]}
     */
    auth0Providers,

    /**
     * Configures the application's routes.
     * @type {Provider}
     */
    provideRouter(routes),

    /**
     * Provides HTTP client services for making HTTP requests.
     * @type {Provider}
     */
    provideHttpClient(),

    // Uncomment the following line to provide HTTP client with an API interceptor.
    // provideHttpClient(withInterceptors([apiInterceptor])),

    /**
     * Configures the application's state management using NgRx store.
     * @type {Provider}
     */
    provideStore({ auth: userReducer, hub: hubReducer }),

    /**
     * Configures the effects for the application's state management.
     * @type {Provider}
     */
    provideEffects([UserEffects, HubEffects]),

    /**
     * Configures the Redux DevTools for debugging the application's state.
     * @type {Provider}
     */
    provideStoreDevtools(),

    /**
     * Provides animation services for the application.
     * @type {Provider}
     */
    provideAnimations(),
  ]
};
