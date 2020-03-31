import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LayoutService } from '@nx/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../app.state';
import * as ScreenSizeActions from '@nx/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'nx-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  screenSizeType$: Observable<unknown>;

  constructor(
    private readonly layoutService: LayoutService,
    private readonly store: Store<fromRoot.AppState>
  ) {
    this.screenSizeType$ = store.pipe(
      select(state => state.screenSize.screenType)
    );
    this.layoutService.getScreenSizeType().subscribe(value => {
      this.store.dispatch(
        ScreenSizeActions.setScreenSize({ screenType: value })
      );
    });
  }

  ngOnInit() {}
}
