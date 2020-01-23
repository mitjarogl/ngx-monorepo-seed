import * as AppLangActions from '../actions/app-lang.actions';
import { AppLangEnum } from '@nx/core';

export interface State {
  lang: AppLangEnum;
}

const initialState: State = { lang: AppLangEnum.EN };


export function reducer(state = initialState, action: AppLangActions.AppLangActionsUnion): State {
  switch (action.type) {
    case AppLangActions.setAppLanguage.type:
      return {
        ...state,
        lang: action.lang,
      };
    default:
      return state;
  }
}

