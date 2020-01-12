import {Pipe, PipeTransform} from '@angular/core';
import {UtilService} from '@nx/core';

@Pipe({
  name: 'daysOrHoursBetweenPipe'
})
export class DaysOrHoursBetweenPipe implements PipeTransform {

  constructor(private readonly utilService: UtilService) {
  }

  transform(start: Date, end: Date): any {

    const numOfDays = this.utilService.getDaysBetweenDates(start, end);
    if (!numOfDays) {
      const numOfHours = this.utilService.geHoursBetweenDates(start, end);
      return numOfHours + ' hour(s)';
    } else {
      return numOfDays + ' day(s)';
    }
  }
}
