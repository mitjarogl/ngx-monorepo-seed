import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScreenSizeTypeEnum } from '../enums/screen-size-type.enum';
import { Platform } from '@angular/cdk/platform';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  constructor(
    public readonly platform: Platform,
    private readonly breakpointObserver: BreakpointObserver
  ) {}

  isDesktopScreen(): boolean {
    return this.breakpointObserver.isMatched('(min-width: 1281px)');
  }

  isLargeDesktopScreen(): boolean {
    return this.breakpointObserver.isMatched('(min-width: 1366px)');
  }

  isXLargeDesktopScreen(): boolean {
    return this.breakpointObserver.isMatched('(min-width: 1920px)');
  }

  isXXLargeDesktopScreen(): boolean {
    return this.breakpointObserver.isMatched('(min-width: 2560px)');
  }

  isLaptopScreen(): boolean {
    return this.breakpointObserver.isMatched(
      '(min-width: 1025px) and (max-width: 1280px)'
    );
  }

  isRetinaScreen() {
    return this.breakpointObserver.isMatched(
      'only screen and (-webkit-min-device-pixel-ratio: 2)' +
        'and (min-width: 1300px), only screen ' +
        'and (min--moz-device-pixel-ratio: 2)' +
        'and (min-width: 1300px), only screen' +
        'and (-o-min-device-pixel-ratio: 2/1) ' +
        'and (min-width: 1300px), only screen ' +
        'and (min-device-pixel-ratio: 2)' +
        'and (min-width: 1300px), only screen ' +
        'and (min-resolution: 192dpi)' +
        'and (min-width: 1300px), only screen ' +
        'and (min-resolution: 2dppx)  and (min-width: 1300px' +
        ')'
    );
  }

  isPortraitTabletScreen() {
    return this.breakpointObserver.isMatched(
      '(min-width: 768px) and (max-width: 1024px)'
    );
  }

  isLandscapeTabletScreen() {
    return this.breakpointObserver.isMatched(
      '(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)'
    );
  }

  isMobileScreen() {
    return this.breakpointObserver.isMatched(
      '(min-width: 320px) and (max-width: 767px)'
    );
  }

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
          map(val => (val.matches ? ScreenSizeTypeEnum.DESKTOP : undefined))
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

  isAndroid(): boolean {
    return this.platform.ANDROID;
  }

  isIOS(): boolean {
    return this.platform.IOS;
  }

  isBrowser(): boolean {
    return this.platform.isBrowser;
  }
}
