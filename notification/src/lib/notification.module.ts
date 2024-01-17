import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';
import { NotificationRoutes } from './notifications.routes';

@NgModule({
  imports: [CommonModule, NotificationRoutes],
  declarations: [NotificationComponent],
})
export class NotificationModule {}
