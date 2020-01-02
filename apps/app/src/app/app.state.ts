import { ActionReducerMap } from '@ngrx/store';
import * as fromRoot from '@nx/state';


// Extended App state
export interface AppState extends fromRoot.AppState {
  setAdditionalPropertiesHere: null,
}

// Extended global state
export const reducers: ActionReducerMap<fromRoot.AppState> = {
  auth: fromRoot.AuthReducer,
  loader: fromRoot.LoaderReducer,
  screenSize: fromRoot.ScreenReducer,
};
