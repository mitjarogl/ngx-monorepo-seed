import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import * as moment from 'moment';
import { formatCurrency } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  readonly DAY_MILLISECONDS = 24 * 60 * 60 * 1000;

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  formatDate(date: Date, format: string): string {
    return moment(date).format(format);
  }

  showDiffBetweenDates(date1: Date, date2: Date): number {
    let diff = moment(date2).diff(date1, 'minutes');
    if (isNaN(diff)) {
      diff = moment(date2).diff(date1, 'hours');
    }
    if (!isNaN(diff)) {
      return diff;
    } else {
      return -1;
    }
  }

  showDiffBetweenTimes(start: string, end: string): number {
    const startTime = moment(start, 'HH:mm');
    const endTime = moment(end, 'HH:mm');
    const diff = moment(endTime).diff(startTime, 'minutes');
    if (isNaN(diff)) {
      return -1;
    }
    return diff;
  }

  geHoursBetweenDates(start: Date, end: Date): number {
    return moment(end).diff(start, 'hours');
  }

  getDaysBetweenDates(start: Date, end: Date): number {
    return moment(end).diff(start, 'days');
  }

  combineDateAndTime(date: Date, time: string): Date {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    if (isNaN(date.getTime()) || !time) {
      return new Date();
    }
    if (!time.split(':')[0] && !time.split(':')[1]) {
      return new Date();
    }

    const formattedDate = moment(date.toISOString()).format('MM/DD/YYYY');
    const dateTime = moment(formattedDate, 'MM/DD/YYYY')
      .add(time.split(':')[0], 'h')
      .add(time.split(':')[1], 'm');

    return dateTime.toDate();
  }

  getHumanDateRange(start: Date, end: Date): string {
    if (moment(end).diff(start, 'days') <= 0) {
      const endDate = moment(end).format('ddd, DD MMMM YYYY');
      return endDate;
    } else {
      const startDate = moment(start).format('ddd, DD');
      const endDate = moment(end).format('ddd, DD MMMM YYYY');
      return startDate + ' - ' + endDate;
    }
  }

  getDateFromDateTime(dateTime: Date): Date {
    if (!(dateTime instanceof Date)) {
      return new Date();
    }
    const formattedDate = moment(dateTime.toISOString()).format('MM/DD/YYYY');
    return moment(formattedDate, 'MM/DD/YYYY').toDate();
  }

  getTimeFromDateTime(dateTime: Date): string {
    if (!(dateTime instanceof Date)) {
      return '00:00';
    }
    return moment(dateTime).format('HH:mm');
  }

  get12TimeFromDateTime(dateTime: Date): string {
    if (!(dateTime instanceof Date)) {
      return '00:00';
    }
    return moment(dateTime).format('hh:mm A');
  }

  getCurrentMonthAndYear(date?: Date): string {
    if (date) {
      return moment(date)
        .format('MMMM YYYY')
        .toString();
    } else {
      return moment()
        .format('MMMM YYYY')
        .toString();
    }
  }

  getDayFromDate(date: Date): string {
    if (!(date instanceof Date)) {
      return 'n/a';
    }

    return moment(date).format('dddd');
  }

  isSameDay(date1: Date, date2: Date): boolean {
    return moment(date1).isSame(date2, 'day');
  }

  isDateNextDay(date1: Date, date2: Date): boolean {
    return moment(date1)
      .add(1, 'day')
      .isSame(date2, 'day');
  }

  addDays(numOfDays: number): Date {
    return moment()
      .add(numOfDays, 'days')
      .toDate();
  }

  addMonths(numOfMonths: number): Date {
    return moment()
      .add(numOfMonths, 'months')
      .toDate();
  }

  getNextDay(date: Date): Date {
    return moment(date)
      .add(1, 'days')
      .toDate();
  }

  isDateBetweenMultipleDateRanges(
    currentDate: Date,
    events: { start: Date; end: Date }[]
  ): boolean {
    let inRange = false;
    for (const event of events) {
      inRange =
        this.getDateFromDateTime(currentDate) >=
          this.getDateFromDateTime(event.start) &&
        this.getDateFromDateTime(currentDate) <=
          this.getDateFromDateTime(event.end);
      // console.log(event.start);
      if (inRange) {
        return inRange;
      }
    }
    return inRange;
  }

  isDateBetweenDateRange(currentDate: Date, start: Date, end: Date): boolean {
    return currentDate >= start && currentDate <= end;
  }

  getEarlistAndLatestDate(schedulers: { start; end }[]): { earliest; latest } {
    if (!schedulers.length) {
      return { earliest: null, latest: null };
    }
    const startDates = schedulers.map(schedule => schedule.start);
    const endDates = schedulers.map(schedule => schedule.end);
    const earliest = startDates.reduce((a, b) => (a < b ? a : b));
    const latest = endDates.reduce((a, b) => (a > b ? a : b));
    return { earliest, latest };
  }

  isDateRangeOverlap(
    dateRanges: { start: Date; end: Date }[]
  ): { overlap: boolean; ranges: any[] } {
    const sortedRanges = dateRanges.sort((previous, current) => {
      const previousTime = previous.start.getTime();
      const currentTime = current.start.getTime();

      if (previousTime < currentTime) {
        return -1;
      }

      if (previousTime === currentTime) {
        return 0;
      }

      return 1;
    });

    const result = sortedRanges.reduce(
      (acc: any, current, idx, arr) => {
        // get the previous range
        if (idx === 0) {
          return acc;
        }
        const previous = arr[idx - 1];

        // check for any overlap
        const previousEnd = previous.end.getTime();
        const currentStart = current.start.getTime();
        const overlap = previousEnd >= currentStart;

        if (overlap) {
          acc.overlap = true;
          acc.ranges.push({
            previous: previous,
            current: current
          });
        }

        return acc;
      },
      { overlap: false, ranges: [] }
    );

    return result;
  }

  getVideoFileTypes(): string[] {
    return [
      'mp4',
      'mov',
      'avi',
      'mkv',
      'video/mp4',
      'video/mov',
      'video/avi',
      'video/mkv'
    ];
  }

  getImageFileTypes(): string[] {
    return ['jpg', 'jpeg', 'png', 'image/jpg', 'image/jpeg', 'image/png'];
  }

  isMediaTypeVideo(mediaType: string): boolean {
    return this.getVideoFileTypes().indexOf(mediaType) !== -1;
  }

  isMediaTypeImage(mediaType: string): boolean {
    return this.getImageFileTypes().indexOf(mediaType) !== -1;
  }

  sortArrayBy<T>(array: T[], property: string, type: string = 'asc'): T[] {
    if (type === 'desc') {
      return array.sort((a, b) => b[property].localeCompare(a[property]));
    } else {
      return array.sort((a, b) => a[property].localeCompare(b[property]));
    }
  }

  isBase64(string: string): boolean {
    if (!string) {
      return false;
    }
    const regex =
      '^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$';
    return string.match(regex) !== null;
  }

  getStartOfDay(date: Date): Date {
    return moment(date)
      .startOf('day')
      .toDate();
  }

  getStartOfMonth(date: Date): Date {
    return moment(date)
      .startOf('month')
      .toDate();
  }

  getEndOfMonth(date: Date): Date {
    return moment(date)
      .endOf('month')
      .toDate();
  }

  getStartOfWeek(year: number, weekNumber: number): Date {
    return moment()
      .year(year)
      .week(weekNumber)
      .startOf('week')
      .toDate();
  }

  getEndOfWeek(year: number, weekNumber: number): Date {
    return moment()
      .year(year)
      .week(weekNumber)
      .endOf('week')
      .toDate();
  }

  parseYearAndWeekNumberFromWeekString(
    weekString: string
  ): { year; weekNumber } {
    const year = weekString.split('-')[0];
    const weekNumber = weekString.split('-W')[1];
    return {
      year,
      weekNumber
    };
  }

  arrayToMatrix(arr, width): any[] {
    return arr.reduce(
      (rows, key, index) =>
        (index % width === 0
          ? rows.push([key])
          : rows[rows.length - 1].push(key)) && rows,
      []
    );
  }

  getLocalISODateTime(date: Date, endOfDay?: boolean): string {
    const dateFormatted = moment(date).utc(true);
    if (endOfDay) {
      return dateFormatted.endOf('day').toISOString();
    }
    return dateFormatted.toISOString();
  }

  getLocalISODate(dateTime: Date): string | null {
    if (!(dateTime instanceof Date)) {
      return null;
    }
    return moment(dateTime.toISOString()).format('YYYY-MM-DD');
  }

  formatCurrencyValue(value: number, symbol: string = '$'): string {
    if (!value) {
      return '';
    }

    return formatCurrency(value, this.locale, symbol);
  }

  isArrayEmpty<T>(array: Array<T>): boolean {
    return array == null || array.length === 0;
  }

  toggleArrayValue<T>(
    originalArray: Array<T>,
    value: T,
    compare?: (v1: T, v2: T) => boolean
  ): Array<T> {
    if (!originalArray) {
      return [];
    }

    let index = -1;

    if (compare) {
      index = originalArray.findIndex(element => compare(element, value));
    } else {
      index = originalArray.indexOf(value);
    }

    const array = [...originalArray];

    if (index === -1) {
      array.push(value);
    } else {
      array.splice(index, 1);
    }

    return array;
  }

  extractLastPathFromUrl(path: string): string {
    path = path.replace(
      /(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}/g,
      ''
    ); // Replace GUID
    const splitted = path.split('/');
    const filtered = splitted.filter(value => value); // Filter empty values
    return filtered[filtered.length - 1];
  }

  capitalize = str =>
    str.length ? str[0].toUpperCase() + str.slice(1).toLowerCase() : '';

  enumToPrettyString(str: any): string {
    if (!str) {
      return '';
    }
    str = this.replaceAll(str.toString().toLowerCase(), '_', ' ');
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  replaceAll(str: string, find: string, replace: string): string {
    return str.replace(new RegExp(find, 'g'), replace);
  }
}
