import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { DirectivesModule } from '../../directives/directives.module';
import { PipesModule } from '../../pipes/pipes.module';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { PopoverComponent } from './popover/popover.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


const COMPONENTS = [
  ConfirmationDialogComponent,
  PopoverComponent,
];


@NgModule({
  imports: [CommonModule, MaterialModule,
    ReactiveFormsModule, PipesModule, DirectivesModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  entryComponents: [ConfirmationDialogComponent],
})
export class UtilComponentsModule {
}
