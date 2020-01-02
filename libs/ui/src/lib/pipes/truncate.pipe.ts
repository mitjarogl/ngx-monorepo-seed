import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

    transform(value: string, limit = 10, completeWords = false, ellipsis = '...') {
        if (!value) {
            return '';
        }

        let wordLimit = limit;

        if (completeWords) {
            wordLimit = value.substr(0, limit).lastIndexOf(' ');
        }

        if (wordLimit > -1) { // only one word
            limit = wordLimit;
        }

        return value.substr(0, limit) + (limit <= value.length ? ellipsis : '');
    }

}
