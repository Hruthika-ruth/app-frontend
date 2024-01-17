import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const SHARED_ROUTES: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'birth',
        loadChildren: () =>
          import('@reg-angular/birthreg').then((m) => m.BirthRegModule),
      },
      {
        path: 'death',
        loadChildren: () =>
          import('@reg-angular/deathreg').then((m) => m.DeathRegModule),
      },
      {
        path: 'notification',
        loadChildren: () =>
          // eslint-disable-next-line @nx/enforce-module-boundaries
          import('@reg-angular/notification').then((m) => m.NotificationModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(SHARED_ROUTES)],
  exports: [RouterModule],
})
export class SharedRoutes {}
