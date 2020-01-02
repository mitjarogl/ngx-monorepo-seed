import * as ScreenSizeActions from '../actions/screen.actions';
import { ScreenSizeTypeEnum } from '@nx/core';

export interface State {
  screenType: ScreenSizeTypeEnum;
}

const initialState: State = { screenType: null };


export function reducer(state = initialState, action: ScreenSizeActions.ScreenSizeActionsUnion): State {
  switch (action.type) {
    case ScreenSizeActions.setScreenSize.type:
      return {
        ...state,
        screenType: action.screenType,
      };
    default:
      return state;
  }
}

