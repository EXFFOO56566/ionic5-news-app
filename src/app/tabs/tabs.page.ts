import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  val = 'tab1';
  constructor() {}

  tabchange(eve) {
    console.log(eve.tab);
    this.val = eve.tab;
  }

}
