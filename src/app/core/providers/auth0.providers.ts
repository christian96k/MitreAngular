import { importProvidersFrom } from '@angular/core';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../../../environments/environment';

export const auth0Providers = importProvidersFrom(
  AuthModule.forRoot({
    domain: environment.auth0.domain,
    clientId: environment.auth0.clientId,
    authorizationParams: {
      redirect_uri: `${environment.deployUrl}/${environment.auth0.redirect_uri}`
    },
  })
);

