import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'textSingularPlural'
})
export class TextSingularPluralPipe implements PipeTransform {

    transform(value: number, text: [string, string]): any {
        if (value > 1) {
            return value + ' ' + text[1];
        }
        return value + ' ' + text[0];

    }

}
