import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as SnackBarActions from '../actions/snack-bar.actions';
import * as CoreActions from '../actions/core.actions';
import { AppLoaderLoading } from '../actions/loader.actions';
import { Severity } from '@nx/core';


@Injectable()
export class CoreEffects {

  @Effect()
  hideLoader$: Observable<Action> = this.actions$.pipe(
    ofType(CoreActions.CoreActionTypes.FAIL),
    map(() => (new AppLoaderLoading(false))),
  );

  @Effect()
  showErrorNotification$: Observable<Action> = this.actions$.pipe(
    ofType(CoreActions.CoreActionTypes.FAIL),
    map((action: CoreActions.FailAction) => {
        let msg = 'Ooopsy Daisy, something went wrong!';
        if (action.payload.error.status === 400 && action.payload.error.error.message) {
          msg = action.payload.error.error.message;
        } else if (action.payload.error.status === 400 && action.payload.error.error[0].constraints) {
          msg = Object.values(action.payload.error.error[0].constraints)[0] as string;
        } else if (action.payload.error.status === 400) {
          msg = 'Your input data is incorrect';
        } else if (action.payload.error.status === 404) {
          msg = 'Resource is not available';
        } else if (action.payload.error.status === 403) {
          msg = 'Forbidden access';
        } else if (action.payload.error.status === 406) {
          msg = 'Resource is currently not available';
        }

        return new SnackBarActions.SnackBarShow({
          message: msg,
          severity: Severity.ERROR,
          duration: 3000,
        });
      },
    ),
  );

  constructor(private actions$: Actions) {
  }
}

