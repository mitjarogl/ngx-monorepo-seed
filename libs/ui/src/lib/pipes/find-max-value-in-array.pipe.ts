import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'findMaxValueInArray',
})
export class FindMaxValueInArrayPipe implements PipeTransform {
  transform(array: any[], objKey: string): number {
    if (array && objKey) {
      const mappedArray = array.map((value => value[objKey]));
      return Math.max.apply(Math, mappedArray);
    }
    return NaN;
  }
}
