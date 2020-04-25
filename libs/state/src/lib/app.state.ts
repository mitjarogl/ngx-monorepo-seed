import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromLoader from './reducers/loader.reducer';
import * as fromAuth from './reducers/auth.reducer';
import * as fromScreenSize from './reducers/screen-size.reducer';
import { AuthActionTypes } from './actions/auth.actions';
import * as fromRouter from '@ngrx/router-store';

// Global app state
export interface AppState {
  router: fromRouter.RouterReducerState<any>;
  loader: fromLoader.State;
  auth: fromAuth.State;
  screenSize: fromScreenSize.State;
}

// Global reducers
export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  loader: fromLoader.reducer,
  auth: fromAuth.reducer,
  screenSize: fromScreenSize.reducer,
};

// Middleware for logout
export function resetStore(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    return reducer(
      action.type === AuthActionTypes.LOGOUT ? undefined : state,
      action
    );
  };
}

// Middleware for debug
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log(action);
    console.log(state);

    return reducer(state, action);
  };
}

// Experimental (Prepared to work with Angular Universal (LocalStorage support for Angular Universal))
const customStorage: Storage = {
  length: 0,
  clear: function (): void {
    if (window && window.localStorage) {
      window.localStorage.clear();
      this.length = window.localStorage.length;
    }
  },
  getItem: function (key: string): string | null {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  key: function (index: number): string | null {
    try {
      return window.localStorage.key(index);
    } catch {
      return null;
    }
  },
  removeItem: function (key: string): void {
    try {
      window.localStorage.removeItem(key);
      this.length = window.localStorage.length;
    } catch {
      return;
    }
  },
  setItem: function (key: string, data: string): void {
    try {
      window.localStorage.setItem(key, data);
      this.length = window.localStorage.length;
    } catch {
      return;
    }
  },
};

// Middleware for syncing with local storage
export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['auth'],
    rehydrate: true,
    storage: customStorage,
  })(reducer);
}

export const metaReducers: MetaReducer<AppState>[] = [
  debug,
  localStorageSyncReducer,
  resetStore,
];
export const metaProdsReducers: MetaReducer<AppState>[] = [
  localStorageSyncReducer,
  resetStore,
];
