import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from '@nx/ui';
import { ComponentsModule } from '@nx/ui';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [LayoutComponent, HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    LayoutRoutingModule,
    MaterialModule,
  ],
})
export class LayoutModule {
}
