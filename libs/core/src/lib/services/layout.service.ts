import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScreenSizeTypeEnum } from '../enums/screen-size-type.enum';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  constructor(private readonly breakpointObserver: BreakpointObserver) {}

  getScreenSizeType(): Observable<ScreenSizeTypeEnum | undefined> {
    return combineLatest(
      this.breakpointObserver
        .observe([Breakpoints.Handset])
        .pipe(
          map(val => (val.matches ? ScreenSizeTypeEnum.MOBILE : undefined))
        ),
      this.breakpointObserver
        .observe([Breakpoints.Tablet])
        .pipe(
          map(val => (val.matches ? ScreenSizeTypeEnum.TABLET : undefined))
        ),
      this.breakpointObserver
        .observe([Breakpoints.Web])
        .pipe(
          map(val => (val.matches ? ScreenSizeTypeEnum.DESKTOP : undefined))
        )
    ).pipe(map(values => values.find(value => value !== undefined)));
  }

  isMobile(): Observable<boolean> {
    return this.breakpointObserver.observe([Breakpoints.Handset]).pipe(
      map(val => {
        console.log(val);
        return val.matches;
      })
    );
  }

  isTablet(): Observable<boolean> {
    return this.breakpointObserver.observe([Breakpoints.Tablet]).pipe(
      map(val => {
        return val.matches;
      })
    );
  }

  isDesktop(): Observable<boolean> {
    return this.breakpointObserver.observe([Breakpoints.Web]).pipe(
      map(val => {
        return val.matches;
      })
    );
  }
}
