import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, switchMap, catchError, throwError, of } from 'rxjs';
import { UserFacade } from '../modules/user/store/user.facade';


export const apiInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const userFacade = inject(UserFacade);
  const authService = inject(AuthService);

  console.log('interceptor')
  return authService.getAccessTokenSilently().pipe(
    switchMap((token) => {
      if (!token) {
        return throwError(() => new Error('Autht 0 Token non presente'));
      }
      return next(modifyReq(request, token));
    }),
    catchError((err) => {
      // Handle errors
      if (err.error) {
        return throwError(() => new Error('network error'));
      }
      return throwError(() => err);
    })
  );
};

function modifyReq(
  request: HttpRequest<unknown>,
  token: string
): HttpRequest<unknown> {
  return request.clone({
    url: modifyUrl(request.url),
    headers: request.headers.set('Authorization', `Bearer ${token}`),
  });
}

function modifyUrl(url: string): string {
  console.log('url', url)
  return `${url}`;
}
