import { NgModule } from '@angular/core';
import { DateFormatPipe } from './dateFormat.pipe';
import { TimeAgoPipe } from './time-ago.pipe';
import { ArrayToStringPipe } from './array-to-string.pipe';
import { MapArrayByPipe } from './map-array-by.pipe';
import { ExistsInArrayPipe } from './exists-in-array.pipe';
import { FirstElementPipe } from './first-element.pipe';
import { TextSingularPluralPipe } from './text-singular-plural.pipe';
import { SumByArrayPropPipe } from './sum-by-array-prop.pipe';
import { ReplacePipe } from './replace.pipe';
import { FindByInArrayPipe } from './find-by-in-array.pipe';
import { TruncatePipe } from './truncate.pipe';
import { FindMaxValueInArrayPipe } from './find-max-value-in-array.pipe';
import { PercentageChangePipe } from './percentage-change.pipe';
import { DaysOrHoursBetweenPipe } from './days-or-hours-between.pipe';
import { EnumTitlePipe } from './enum-title.pipe';
import { ImageSrcTransformPipe } from './image-src-transform.pipe';


const PIPES = [
  DateFormatPipe,
  TimeAgoPipe,
  ArrayToStringPipe,
  MapArrayByPipe,
  ExistsInArrayPipe,
  FirstElementPipe,
  TextSingularPluralPipe,
  SumByArrayPropPipe,
  ReplacePipe,
  FindByInArrayPipe,
  TruncatePipe,
  FindMaxValueInArrayPipe,
  PercentageChangePipe,
  DaysOrHoursBetweenPipe,
  EnumTitlePipe,
  ImageSrcTransformPipe,
];

@NgModule({
  imports: [],
  declarations: [PIPES],
  providers: [],
  exports: [PIPES],
})
export class PipesModule {
}
