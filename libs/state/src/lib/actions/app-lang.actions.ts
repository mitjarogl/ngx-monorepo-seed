import { createAction, props } from '@ngrx/store';
import { AppLangEnum } from '@nx/core';


export const setAppLanguage = createAction(
  '[Language] Set app language',
  props<{ lang: AppLangEnum }>(),
);

export type AppLangActionsUnion = ReturnType<typeof setAppLanguage>;
