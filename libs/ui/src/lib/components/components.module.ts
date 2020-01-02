import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { UtilComponentsModule } from '../components/util/util-components.module';
import { LayoutComponentsModule } from './layout/layout-components.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    UtilComponentsModule,
    LayoutComponentsModule,
    PipesModule,
    DirectivesModule,
  ],
  declarations: [NotFoundComponent, UnauthorizedComponent],
  exports: [UtilComponentsModule, LayoutComponentsModule, NotFoundComponent, UnauthorizedComponent],
  providers: [],
  entryComponents: [],
})
export class ComponentsModule {
}
