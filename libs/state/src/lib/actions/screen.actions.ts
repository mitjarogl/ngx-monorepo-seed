import { createAction, props } from '@ngrx/store';
import { ScreenSizeTypeEnum } from '@nx/core';


export const setScreenSize = createAction(
  '[Screen size] Set screen size',
  props<{ screenType: ScreenSizeTypeEnum }>(),
);

export type ScreenSizeActionsUnion = ReturnType<typeof setScreenSize>;
