import * as AuthActions from '../actions/auth.actions';
import { AuthActionTypes } from '../actions/auth.actions';
import { AuthUser } from '@nx/core';

export interface State {
  authenticated: boolean;
  authUser?: AuthUser;
  token?: string;
  message?: string;
  sendResetPasswordEmailMessage?: string,
  resetPasswordMessage?: string
}

const initialState: State = { authenticated: false, authUser: null, token: null, message: null };


export function reducer(state = initialState, action: any): State {
  switch (action.type) {
    case AuthActions.AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        authUser: action.payload,
        token: action.payload.accessToken,
        message: null,
      };
    case AuthActions.AuthActionTypes.UPDATE_ME_SUCCESS:
      return {
        ...state,
        authenticated: true,
        authUser: {
          ...state.authUser,
          id: action.payload.updated.id,
          firstname: action.payload.updated.firstname,
          lastname: action.payload.updated.lastname,
          email: action.payload.updated.email,
          role: action.payload.updated.role.name,
          image: action.payload.updated.image,
        },
      };
    case AuthActions.AuthActionTypes.LOGIN_FAIL:
      return {
        ...state,
        authenticated: false,
        message: action.payload,
      };
    case AuthActionTypes.SEND_RESET_PASSWORD_EMAIL_SUCCESS:
    case AuthActionTypes.SEND_RESET_PASSWORD_EMAIL_FAIL:
      return {
        ...state, authenticated: false, sendResetPasswordEmailMessage: action.payload,
      };
    case AuthActionTypes.RESET_PASSWORD_SUCCESS:
    case AuthActionTypes.RESET_PASSWORD_FAIL: {
      return { ...state, authenticated: false, resetPasswordMessage: action.payload };
    }
    case AuthActions.AuthActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        authenticated: false,
        message: action.payload,
      };
    case AuthActions.AuthActionTypes.REGISTER_FAIL:
      return {
        ...state,
        authenticated: false,
        message: action.payload,
      };
    case AuthActions.AuthActionTypes.REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        token: action.payload.accessToken,
        authUser: {
          ...state.authUser,
          ...action.payload,
        },
        message: null,
      };
    case AuthActions.AuthActionTypes.CLEAR_AUTH_MESSAGE:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
}

