import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '@nx/ui';
import { UnauthorizedComponent } from '@nx/ui';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/layout/layout.module#LayoutModule',
  },
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
