/**
 * Configuration for the Angular application environment.
 * @namespace EnvironmentConfig
 */
export const environment = {
  /**
   * Specifies whether the application is in production mode.
   * @type {boolean}
   */
  production: true,

  /**
   * The base URL for deployment.
   * @type {string}
   */
  deployUrl: '',

  /**
   * The base URL for the API.
   * @type {string}
   */
  apiUrl: '',

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
    domain: '',

    /**
     * The Auth0 client ID.
     * @type {string}
     */
    clientId: '',

    /**
     * The redirect URI after authentication.
     * @type {string}
     */
    redirect_uri: 'oauth/callback',
  }
};
