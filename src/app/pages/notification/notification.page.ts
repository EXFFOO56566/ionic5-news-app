import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  notification;
  constructor(private dummy: DummyService) {
    this.notification = this.dummy.news;
  }

  ngOnInit() {
  }

}
