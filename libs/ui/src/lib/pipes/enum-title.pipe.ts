import {Pipe, PipeTransform} from '@angular/core';
import {TitleCasePipe} from '@angular/common';

@Pipe({
    name: 'enumTitle'
})
export class EnumTitlePipe implements PipeTransform {

    readonly charsToRemove = /\_/gi;

    constructor(private readonly titleCasePipe: TitleCasePipe) {

    }

    transform(value: any, args?: any): any {
        if (!value) {
            return;
        }

        const titleCaeValue = this.titleCasePipe.transform(value);
        return titleCaeValue.replace(this.charsToRemove, ' ');
    }

}
