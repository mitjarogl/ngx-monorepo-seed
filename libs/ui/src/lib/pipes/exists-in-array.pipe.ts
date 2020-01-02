import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'existsInArray',
})
export class ExistsInArrayPipe implements PipeTransform {
  transform(values: any[], objKey: string, searchedItem: any): boolean {
    if (values) {
      return values.findIndex(val => val[objKey] === searchedItem) !== -1;
    } else {
      return false;
    }
  }
}
