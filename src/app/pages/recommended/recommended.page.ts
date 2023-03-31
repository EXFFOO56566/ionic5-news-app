import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.page.html',
  styleUrls: ['./recommended.page.scss'],
})
export class RecommendedPage implements OnInit {


  slideOpts = {
    slidesPerView: 3,
  };

  slideOpts2 = {
    slidesPerView: 1.5,
  };

  papers;
  places;
  plt;
  constructor(private dummy: DummyService, private router: Router) {
    this.plt = localStorage.getItem('platform');
    this.papers = this.dummy.newspapers;
    this.places = this.dummy.places;
  }

  ngOnInit() {
  }

  goToRecoList(val) {
    const navData: NavigationExtras = {
      queryParams : {
        id : val
      }
    };
    this.router.navigate(['/recommended-list'], navData);
  }

  goToLocation() {
    this.router.navigate(['location-explore']);
  }

  goToSinglePaper() {
    this.router.navigate(['/single-paper']);
  }

  goToNotification() {
    this.router.navigate(['/notification']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

}
