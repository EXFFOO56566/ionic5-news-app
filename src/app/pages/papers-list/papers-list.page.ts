import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DummyService } from 'src/app/services/dummy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-papers-list',
  templateUrl: './papers-list.page.html',
  styleUrls: ['./papers-list.page.scss'],
})
export class PapersListPage implements OnInit {

  papers;
  plt;
  constructor(private dummy: DummyService, private navCtrl: NavController, private router: Router) {
    this.plt = localStorage.getItem('platform');
    this.papers = this.dummy.newspapers;
  }


  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  goToNotification() {
    this.router.navigate(['/notification']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

}
