import {Action} from '@ngrx/store';

export enum DialogActionTypes {
  OPEN_CONFIRM_DIALOG = '[Confirm Dialog] open',
  DISMISS_CONFIRM_DIALOG = '[Confirm Dialog] dismiss',
}

export class OpenConfirmDialog implements Action {
  readonly type = DialogActionTypes.OPEN_CONFIRM_DIALOG;

  constructor(public payload: {
    cancel?: Action,
    confirm: Action,
    navigate?: string[],
    text: string,
    title: string
  }) {
  }
}

export class DismissConfirmDialog implements Action {
  readonly type = DialogActionTypes.DISMISS_CONFIRM_DIALOG;

}

export type DialogActions = OpenConfirmDialog;
