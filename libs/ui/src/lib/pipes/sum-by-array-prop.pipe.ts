import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumByArrayProp',
})
export class SumByArrayPropPipe implements PipeTransform {
  transform(value: any[], objKey: string): any[] {
    if (value && objKey) {
      return value.reduce(function(prev, cur) {
        return prev + cur[objKey];
      }, 0);
    }
    return value;
  }
}
