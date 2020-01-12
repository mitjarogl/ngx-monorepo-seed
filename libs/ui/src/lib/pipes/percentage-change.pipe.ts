import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentageChange',
})
export class PercentageChangePipe implements PipeTransform {

  transform(newValue: number, oldValue: number): number {
    if (newValue !== null && oldValue !== null) {
      const increase = newValue - oldValue;
      return (increase / oldValue);
    }
    return null;
  }

}
