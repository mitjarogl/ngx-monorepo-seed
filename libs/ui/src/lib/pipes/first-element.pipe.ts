import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstElement'
})
export class FirstElementPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    if (!value || value.length === 0) {
      return null;
    }
    return value[0];
  }

}
