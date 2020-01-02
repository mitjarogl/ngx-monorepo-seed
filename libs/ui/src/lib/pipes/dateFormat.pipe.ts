import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: any, format: string): any {
    if (value) {
      const date = value instanceof Date ? value : new Date(value);
      return moment(date).format((format) ? format : 'DD.MM.YYYY');
    }
  }
}
