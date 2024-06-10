/**
 * Interface representing a user model.
 */
export interface UserModel {
  /**
   * The user's given name.
   * @type {string}
   */
  given_name: string;

  /**
   * The user's family name.
   * @type {string}
   */
  family_name: string;

  /**
   * The user's nickname.
   * @type {string}
   */
  nickname: string;

  /**
   * The user's full name.
   * @type {string}
   */
  name: string;

  /**
   * The URL of the user's picture.
   * @type {string}
   */
  picture: string;

  /**
   * The date and time when the user's profile was last updated.
   * @type {string}
   */
  updated_at: string;

  /**
   * The user's email address.
   * @type {string}
   */
  email: string;

  /**
   * Indicates whether the user's email address has been verified.
   * @type {boolean}
   */
  email_verified: boolean;

  /**
   * The user's unique identifier.
   * @type {string}
   */
  sub: string;
}

/**
 * Interface representing an error response from Auth0.
 */
export interface Auth0Error {
  /**
   * The type of error.
   * @type {string}
   */
  error: string;

  /**
   * Additional description of the error.
   * @type {string | undefined}
   */
  error_description?: string;

  /**
   * A message describing the error.
   * @type {string | undefined}
   */
  message?: string;
}

/**
 * Type representing possible error types from Auth0.
 */
export type Auth0ErrorType = 'login_required' | 'consent_required' | 'interaction_required';
