import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';

const NOTIFICATION_ROUTE: Route[] = [
  {
    path: '',
    component: NotificationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(NOTIFICATION_ROUTE)],
  exports: [RouterModule],
})
export class NotificationRoutes {}
