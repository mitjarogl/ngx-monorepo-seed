import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapArrayBy',
})
export class MapArrayByPipe implements PipeTransform {
  transform(value: any[], objKey: string): any[] {
    if (value && objKey) {
      return value.map((val) => val[objKey]);
    }
    return value;
  }
}
