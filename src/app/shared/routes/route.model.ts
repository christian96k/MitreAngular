/**
 * Constants related to the application routes and domains.
 * @namespace
 */
export const APP = {
  /**
   * Domain for the main application.
   * @type {string}
   */
  DEAS: 'deas',

  /**
   * Domain for testing purposes.
   * @type {string}
   */
  TEST: 'test',
};

/**
 * Constants related to application callback domains.
 * @namespace
 */
export const APP_CALLBACK = {
  /**
   * Callback domain for OAuth.
   * @type {string}
   */
  AUTH0: 'oauth/callback',
};

/**
 * Constants related to application routes.
 * @namespace
 */
export const ROUTE = {
  /**
   * Route for user authentication.
   * @type {string}
   */
  USER_AUTH: 'user-auth',

  /**
   * Route for the Hub feature.
   * @type {string}
   */
  HUB: 'hub',
};
