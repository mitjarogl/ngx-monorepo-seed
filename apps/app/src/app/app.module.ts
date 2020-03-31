import { MaterialModule } from '@nx/ui';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects, CoreEffects, DialogEffects, metaReducers, SnackBarEffects } from '@nx/state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './app.state';
import { environment, EnvironmentImpl } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { Environment } from '@nx/core';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([CoreEffects, AuthEffects, SnackBarEffects, DialogEffects]),
    !environment.production ? StoreDevtoolsModule.instrument({
      name: 'app',
      maxAge: 5,
      logOnly: environment.production,
    }) : [],
  ],
  providers: [{ provide: Environment, useClass: EnvironmentImpl }],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
