import { AppLoaderActions, AppLoaderActionTypes } from '../actions/loader.actions';

export interface State {
  loadingState: boolean[];
}

const initialState: State = { loadingState: [] };


export function reducer(state = initialState, action: AppLoaderActions): State {
  switch (action.type) {
    case AppLoaderActionTypes.APP_LOADER_LOADING:
      let loaders = [];
      if (action.payload === true) {
        loaders = [...state.loadingState, action.payload];
      } else {
        loaders = [...state.loadingState];
        loaders.pop();
      }
      return {
        ...state,
        loadingState: loaders,
      };
    default:
      return state;
  }
}

