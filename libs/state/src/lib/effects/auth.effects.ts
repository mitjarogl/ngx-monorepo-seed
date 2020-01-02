import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as AuthActions from '../actions/auth.actions';
import { AuthActionTypes } from '../actions/auth.actions';
import { AuthService } from '@nx/core';
import { AppLoaderLoading } from '../actions/loader.actions';
import { Router } from '@angular/router';

const showLoaderActions = [
  AuthActionTypes.LOGIN,
  AuthActionTypes.REGISTER,
  AuthActionTypes.SEND_RESET_PASSWORD_EMAIL,
];


const hideLoaderActions = [
  AuthActionTypes.LOGIN_SUCCESS,
  AuthActionTypes.LOGIN_FAIL,
  AuthActionTypes.REGISTER_SUCCESS,
  AuthActionTypes.REGISTER_FAIL,
  AuthActionTypes.SEND_RESET_PASSWORD_EMAIL_SUCCESS,
  AuthActionTypes.SEND_RESET_PASSWORD_EMAIL_FAIL,
];

@Injectable()
export class AuthEffects {


  @Effect()
  showLoader$: Observable<Action> = this.actions$.pipe(
    ofType(...showLoaderActions),
    map(() => (new AppLoaderLoading(true))),
  );

  @Effect()
  hideLoader$: Observable<Action> = this.actions$.pipe(
    ofType(...hideLoaderActions),
    map(() => (new AppLoaderLoading(false))),
  );

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN),
    switchMap((action: AuthActions.Login) =>
      this.authService.login(action.payload.email, action.payload.password)
        .pipe(
          map(authUser => (new AuthActions.LoginSuccess(authUser))),
          catchError(error => of(new AuthActions.LoginFail(error))),
        ),
    ),
  );


  @Effect()
  logout$: Observable<void> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGOUT),
    switchMap(() => {
      return this.authService.logout();
    }),
  );

  @Effect({ dispatch: false })
  loginSuccess$: Observable<void | Action> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap((val: AuthActions.LoginSuccess) => {
      this.router.navigate(['/']);
    }),
  );

  constructor(private readonly actions$: Actions,
              private readonly authService: AuthService,
              private readonly router: Router) {
  }


}

