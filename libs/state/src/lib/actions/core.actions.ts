import {Action} from '@ngrx/store';


export enum CoreActionTypes {
  FAIL = '[Fail] error occurred',
}

export class FailAction implements Action {
  readonly type = CoreActionTypes.FAIL;

  constructor(
    readonly payload: {
      action?: Action;
      error?: any;
    },
  ) {
  }
}

export type CoreActions = FailAction;
