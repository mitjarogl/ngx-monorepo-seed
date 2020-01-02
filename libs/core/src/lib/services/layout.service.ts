import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScreenSizeTypeEnum } from '../enums/screen-size-type.enum';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {


  constructor(private readonly breakpointObserver: BreakpointObserver) {

  }

  getScreenSizeType(): Observable<ScreenSizeTypeEnum> {
    return combineLatest(
      this.breakpointObserver.observe([
        Breakpoints.Handset,
      ]).pipe(
        map((val) =>
          val.matches ? ScreenSizeTypeEnum.MOBILE : null,
        )),
      this.breakpointObserver.observe([
        Breakpoints.Tablet,
      ]).pipe(
        map((val) =>
          val.matches ? ScreenSizeTypeEnum.TABLET : null,
        )),
      this.breakpointObserver.observe([
        Breakpoints.Web,
      ]).pipe(
        map((val) =>
          val.matches ? ScreenSizeTypeEnum.DESKTOP : null,
        )),
    ).pipe((map((values) =>
      values.find(((value => value !== null))),
    )));
  }

  isMobile(): Observable<boolean> {
    return this.breakpointObserver.observe([
      Breakpoints.Handset,
    ]).pipe(map((val) => {
      console.log(val);
      return val.matches;
    }));
  }

  isTablet(): Observable<boolean> {
    return this.breakpointObserver.observe([
      Breakpoints.Tablet,
    ]).pipe(map((val) => {
      return val.matches;
    }));
  }

  isDesktop(): Observable<boolean> {
    return this.breakpointObserver.observe([
      Breakpoints.Web,
    ]).pipe(map((val) => {
      return val.matches;
    }));
  }
}
