import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() {
  }

  info(msg: string): void {
    console.log(msg);
  }

  warning(msg: string): void {
    console.warn(msg);
  }

  error(msg: string, err?: any): void {
    console.error(msg + ';Error=', err);
  }
}
