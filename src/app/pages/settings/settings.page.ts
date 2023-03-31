import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  layout = 1;
  constructor() { }

  ngOnInit() {
  }

  changeLayout(val) {
    this.layout = val;
  }

}
