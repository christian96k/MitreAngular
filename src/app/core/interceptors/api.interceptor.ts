import { inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { switchMap, catchError } from 'rxjs/operators';
import { UserFacade } from '../modules/user/store/user.facade';
import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


/**
 * Interceptor for API requests to add authorization token.
 * @param {HttpRequest<unknown>} request The HTTP request to be intercepted.
 * @param {HttpHandler} next The next HTTP handler.
 * @returns {Observable<HttpEvent<unknown>>} An observable of the HTTP event.
 */
export const apiInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const userFacade = inject(UserFacade);
  const authService = inject(AuthService);

  return authService.getAccessTokenSilently().pipe(
    switchMap((token) => {
      if (!token) {
        return throwError(() => new Error('Auth0 Token not present'));
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

/**
 * Modifies the request by adding authorization token to headers.
 * @param {HttpRequest<unknown>} request The HTTP request to be modified.
 * @param {string} token The authorization token.
 * @returns {HttpRequest<unknown>} The modified HTTP request.
 */
function modifyReq(
  request: HttpRequest<unknown>,
  token: string
): HttpRequest<unknown> {
  return request.clone({
    url: modifyUrl(request.url),
    headers: request.headers.set('Authorization', `Bearer ${token}`),
  });
}

/**
 * Modifies the URL of the request if necessary.
 * @param {string} url The original URL of the request.
 * @returns {string} The modified URL.
 */
function modifyUrl(url: string): string {
  return `${url}`;
}
