import { NgModule } from '@angular/core';
import { FileDropZoneDirective } from './file-drop-zone.directive';


const DIRECTIVES = [
  FileDropZoneDirective,
];

@NgModule({
  imports: [],
  declarations: [DIRECTIVES],
  exports: [DIRECTIVES],
})
export class DirectivesModule {
}
