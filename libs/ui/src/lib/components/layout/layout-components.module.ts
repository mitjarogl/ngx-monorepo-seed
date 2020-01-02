import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
];


@NgModule({
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
})
export class LayoutComponentsModule {
}
