import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToString'
})
export class ArrayToStringPipe implements PipeTransform {
  transform(value: any[], objKey: string, delimiter: string = ', '): string {
    if (value) {
      if (objKey) {
        return value.map(val => val[objKey]).join(delimiter);
      } else {
        return value.join(delimiter);
      }
    }
    return 'n/a';
  }
}
