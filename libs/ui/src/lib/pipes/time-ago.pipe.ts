import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'timeAgo'})
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date): string {

    if (value) {
      const date = new Date(value);
      const now = new Date().getTime();

      // time since message was sent in seconds
      const ago = (now - date.getTime()) / 1000;

      if (ago < 60) {
        return Math.floor(ago) +
          (Math.floor(ago) === 1 ? ' second ago' : ' seconds ago');
      } else if (ago < 3600) {  // minutes
        return Math.floor(ago / 60) +
          (Math.floor(ago / 60) === 1 ? ' minute ago' : ' minutes ago');
      } else if (ago < 86400) {  // hours
        return Math.floor(ago / 3600) +
          (Math.floor(ago / 3600) === 1 ? ' hour ago' : ' hours ago');
      } else {  // days
        return Math.floor(ago / 86400) +
          (Math.floor(ago / 86400) === 1 ? ' day ago' : ' days ago');
      }
    }
  }
}
