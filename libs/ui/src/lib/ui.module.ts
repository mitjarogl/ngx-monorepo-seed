import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  imports: [CommonModule],
  exports: [ComponentsModule, DirectivesModule, PipesModule],
})
export class UiModule {
}
