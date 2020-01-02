import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { SnackBarActionTypes } from "../actions/snack-bar.actions";
import { tap } from "rxjs/operators";
import * as SnackBarActions  from "../actions/snack-bar.actions";
import { SnackBarService } from "@nx/core";

@Injectable()
export class SnackBarEffects {

    @Effect({
        dispatch: false
    })
    hideSnackBar: Observable<any> = this.actions$.pipe(
        ofType(SnackBarActionTypes.HIDE))
        .pipe(
            tap(() => this.snackBarService.close())
        );

    @Effect({ dispatch: false })
    showSnackBar: Observable<any> = this.actions$.pipe(
        ofType(SnackBarActionTypes.SHOW),
        tap((action: SnackBarActions.SnackBarShow) => {
            this.snackBarService.open(action.payload.message, action.payload.severity, action.payload.duration);
        }
        ));

    constructor(private actions$: Actions,
        private snackBarService: SnackBarService) {
    }
}
