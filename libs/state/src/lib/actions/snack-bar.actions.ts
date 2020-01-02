import { Action } from '@ngrx/store';
import { Severity } from '@nx/core';

export enum SnackBarActionTypes {
  SHOW = '[SnackBar] show',
  HIDE = '[SnackBar] hide',
}

export class SnackBarShow implements Action {
  readonly type = SnackBarActionTypes.SHOW;

  constructor(public payload: { message: string, severity: Severity, duration?: number }) {
  }
}

export class SnackBarHide implements Action {
  readonly type = SnackBarActionTypes.HIDE;

}

export type SnackBarActions = SnackBarShow | SnackBarHide;
