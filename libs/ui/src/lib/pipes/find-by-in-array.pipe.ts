import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findByInArray',
})
export class FindByInArrayPipe implements PipeTransform {
  transform(value: any[], search: any, objKey: string): any {
    if (value && objKey) {
      return value.find((val) => val[objKey] === search);
    } else if (value) {
      return value.find((val) => val === search);
    }
    return value;
  }
}
