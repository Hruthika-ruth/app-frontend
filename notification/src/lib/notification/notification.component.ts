import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'reg-angular-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  registrations: any[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.getRegistrations().subscribe(
      (data) => {
        this.registrations = data;
      },
      (error) => {
        console.error('Error fetching registrations:', error);
      }
    );
  }

  downloadRegistrations(): void {
    const blob = new Blob([JSON.stringify(this.registrations, null, 2)], {
      type: 'application/json',
    });
    saveAs(blob, 'registrations.json');
  }
}
