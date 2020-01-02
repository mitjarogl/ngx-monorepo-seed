import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from '@nx/ui';
import { ComponentsModule } from '@nx/ui';
import { SelectAutocompleteModule } from 'mat-select-autocomplete';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    LayoutRoutingModule,
    MaterialModule,
    SelectAutocompleteModule
  ],
})
export class LayoutModule {
}
