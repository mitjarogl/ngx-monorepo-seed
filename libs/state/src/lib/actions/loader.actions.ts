import { Action } from '@ngrx/store';

export enum AppLoaderActionTypes {
  APP_LOADER_LOADING = '[App loader] loading'
}


export class AppLoaderLoading implements Action {
  readonly type = AppLoaderActionTypes.APP_LOADER_LOADING;

  constructor(public payload: boolean) {
  }
}

export type AppLoaderActions = AppLoaderLoading;
