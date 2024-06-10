/**
 * Configuration for the Angular application environment.
 * @namespace EnvironmentConfig
 */
export const environment = {
  /**
   * Specifies whether the application is in production mode.
   * @type {boolean}
   */
  production: false,

  /**
   * The base URL for deployment.
   * @type {string}
   */
  deployUrl: 'http://localhost:4200',

  /**
   * The base URL for the API.
   * @type {string}
   */
  apiUrl: 'http://localhost:1234',

  /**
   * Configuration for Auth0 authentication.
   * @type {Object}
   * @namespace Auth0Config
   */
  auth0: {
    /**
     * The Auth0 domain.
     * @type {string}
     */
    domain: 'dev-756oxaa4sgzh74rf.us.auth0.com',

    /**
     * The Auth0 client ID.
     * @type {string}
     */
    clientId: 'Jm23xL7WtU0ozm8Sb8lITLFyMWs38a70',

    /**
     * The redirect URI after authentication.
     * @type {string}
     */
    redirect_uri: 'oauth/callback',
  }
};
