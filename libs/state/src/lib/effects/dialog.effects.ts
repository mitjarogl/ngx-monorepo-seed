import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import * as DialogActions from '../actions/dialog.actions';
import {combineLatest, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {Router} from '@angular/router';
import { ConfirmationDialogComponent } from "@nx/ui";


@Injectable()
export class DialogEffects {

  @Effect()
  openConfirmationDialog$ = this.actions$.pipe(
    ofType(DialogActions.DialogActionTypes.OPEN_CONFIRM_DIALOG),
    switchMap((action: DialogActions.OpenConfirmDialog) => {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, <MatDialogConfig>{
        data: {
          text: action.payload.text,
          title: action.payload.title
        }
      });

      return combineLatest(of(action.payload), dialogRef.afterClosed());
    }),
    map((result) => {
      const payload = result[0];
      const dialogResult = result[1];
      if (dialogResult) {
        if (payload.navigate) {
          this.router.navigate(payload.navigate);
        }
        return payload.confirm;
      } else if (payload.cancel) {
        return payload.cancel;
      } else {
        return new DialogActions.DismissConfirmDialog();
      }
    })
  );

  constructor(private router: Router,
              private dialog: MatDialog,
              private actions$: Actions) {
  }
}

