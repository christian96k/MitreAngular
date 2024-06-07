export interface UserModel {
  given_name: string,
  family_name: string,
  nickname: string,
  name: string,
  picture: string,
  updated_at: string,
  email: string,
  email_verified: boolean,
  sub: string
}
export interface UserCredits {
  PM: number;
  AiGT: number;
}

// export interface LoginPayload {
//   email: string;
//   password: string;
// }

// export interface LoginResponse extends User {
//   token: string;
// }


export interface Auth0Error {
  error: string;
  error_description?: string;
  message?: string;
}

export type Auth0ErrorType = 'login_required' | 'consent_required'| 'interaction_required';
