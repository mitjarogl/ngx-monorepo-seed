import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as AppLangActions from '../actions/app-lang.actions';
import { tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class AppLangEffects {


  @Effect({ dispatch: false })
  setAppLang$: Observable<any> = this.actions$.pipe(
    ofType(AppLangActions.setAppLanguage.type),
    tap((action: any) => {
        console.log(action);
        this.translateService.setDefaultLang(action.lang);
        this.translateService.use(action.lang);
      },
    ));

  constructor(private actions$: Actions,
              private translateService: TranslateService) {
  }
}


