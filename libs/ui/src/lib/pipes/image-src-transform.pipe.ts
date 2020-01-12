import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'imageSrcTransform'})
export class ImageSrcTransformPipe implements PipeTransform {
  transform(value: string): string {

    return value.startsWith('https://') || value.startsWith('http://') ? value : 'data:image/jpeg;base64,' + value;
  }
}
