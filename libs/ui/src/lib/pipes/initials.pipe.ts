import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
})

export class InitialsPipe implements PipeTransform {
  transform(value: string) {
    if (value) {
      return value.split(' ').map((n, i, a) => i === 0 || i + 1 === a.length ? n[0] : null).join('');
    }
  }
}
