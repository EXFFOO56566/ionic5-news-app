import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanguageModalPage } from '../language-modal/language-modal.page';
import { Router } from '@angular/router';
import { DummyService } from 'src/app/services/dummy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slideOpts = {
    slidesPerView: 3,
  };

  slideOpts2 = {
    slidesPerView: 1.5,
  };

  chips = ['For You', 'News', 'Following', 'Corona Virus', 'Discovery Plan', 'My City', 'Cricket'];
  city;
  val = 0;
  news;
  places;
  homeSlider;
  papers;
  chipId = 1;
  plt;

  country = 1;
  constructor(private modalCrtl: ModalController, private router: Router, private dummy: DummyService) {
    this.plt = localStorage.getItem('platform');
    this.news = this.dummy.news;
    this.places = this.dummy.places;
    this.homeSlider = this.dummy.homeSlider;
    this.papers = this.dummy.newspapers;
    this.city = this.dummy.city;
  }

  ngOnInit() {
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalCrtl.create({
      component: LanguageModalPage,
      cssClass : 'custom_modal'
    });
    return await modal.present();
  }

  selectChip(val) {
    console.log(val);
    this.val = val;
  }

  goToSinglePost() {
    this.router.navigate(['/single-post']);
  }

  changeColor(val) {
    this.chipId = val;
  }

  chooseCountry(val) {
    this.country = val;
  }

  goToNotification() {
    this.router.navigate(['/notification']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToSinglePaper() {
    this.router.navigate(['/single-paper']);
  }

}
