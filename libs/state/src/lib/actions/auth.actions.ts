import { Action } from '@ngrx/store';
import { AuthUser, User } from '@nx/core';


export enum AuthActionTypes {

  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login success',
  LOGIN_FAIL = '[Auth] Login fail',
  LOGOUT = '[Auth] Logout',

  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register success',
  REGISTER_FAIL = '[Auth] Register fail',

  SEND_RESET_PASSWORD_EMAIL = '[Auth] Send reset password email',
  SEND_RESET_PASSWORD_EMAIL_SUCCESS = '[Auth] Send reset password email success',
  SEND_RESET_PASSWORD_EMAIL_FAIL = '[Auth] Send reset password email fail',

  RESET_PASSWORD = '[Auth] Reset password',
  RESET_PASSWORD_SUCCESS = '[Auth] Reset password success',
  RESET_PASSWORD_FAIL = '[Auth] Reset password fail',

  // REFRESH_TOKEN = '[Auth] Refresh token',
  REFRESH_TOKEN_SUCCESS = '[Auth] Refresh token success',

  UPDATE_ME = '[Auth] update me',
  UPDATE_ME_SUCCESS = '[Auth] update me success',

  CLEAR_AUTH_MESSAGE = '[Auth] Reset response message'

}

export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;

  constructor(public payload: { email: string, password: string }) {
  }
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;

  constructor(public payload: AuthUser) {
  }
}

export class LoginFail implements Action {
  readonly type = AuthActionTypes.LOGIN_FAIL;

  constructor(public payload: any) {
  }
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export class Register implements Action {
  readonly type = AuthActionTypes.REGISTER;

  constructor(public payload: User) {
  }
}

export class RegisterSuccess implements Action {
  readonly type = AuthActionTypes.REGISTER_SUCCESS;

  constructor(public payload: string) {
  }
}

export class RegisterFail implements Action {
  readonly type = AuthActionTypes.REGISTER_FAIL;

  constructor(public payload: any) {
  }
}

export class SendResetPasswordEmail implements Action {
  readonly type = AuthActionTypes.SEND_RESET_PASSWORD_EMAIL;

  constructor(public payload: { email, callbackUrl }) {
  }
}

export class SendResetPasswordEmailSuccess implements Action {
  readonly type = AuthActionTypes.SEND_RESET_PASSWORD_EMAIL_SUCCESS;

  constructor(public payload: any) {
  }
}

export class SendResetPasswordEmailFail implements Action {
  readonly type = AuthActionTypes.SEND_RESET_PASSWORD_EMAIL_FAIL;

  constructor(public payload: any) {
  }
}

export class ResetPassword implements Action {
  readonly type = AuthActionTypes.RESET_PASSWORD;

  constructor(public payload: { password, token }) {
  }
}

export class ResetPasswordSuccess implements Action {
  readonly type = AuthActionTypes.RESET_PASSWORD_SUCCESS;

  constructor(public payload: any) {
  }
}

export class ResetPasswordFail implements Action {
  readonly type = AuthActionTypes.RESET_PASSWORD_FAIL;

  constructor(public payload: any) {
  }
}

export class RefreshTokenSuccess implements Action {
  readonly type = AuthActionTypes.REFRESH_TOKEN_SUCCESS;

  constructor(public payload: AuthUser) {
  }
}

export class UpdateMe implements Action {
  readonly type = AuthActionTypes.UPDATE_ME;

  constructor(public payload: User) {
  }
}

export class UpdateMeSuccess implements Action {
  readonly type = AuthActionTypes.UPDATE_ME_SUCCESS;

  constructor(public payload: { id: string, updated: User }) {
  }
}

export class ClearAuthMessage implements Action {
  readonly type = AuthActionTypes.CLEAR_AUTH_MESSAGE;

}

export type AuthActions =
  Login |
  LoginSuccess |
  LoginFail |
  Logout |
  Register |
  RegisterSuccess |
  RegisterFail |
  SendResetPasswordEmail |
  SendResetPasswordEmailSuccess |
  SendResetPasswordEmailFail |
  SendResetPasswordEmail |
  ResetPassword |
  ResetPasswordSuccess |
  ResetPasswordFail |
  UpdateMe |
  UpdateMeSuccess |
  ClearAuthMessage;
