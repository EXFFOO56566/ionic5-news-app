import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.page.html',
  styleUrls: ['./video-list.page.scss'],
})
export class VideoListPage implements OnInit {

  chips = ['For You', 'News', 'Following', 'Corona Virus', 'Discovery Plan', 'My City', 'Daily Share', 'Entertainment', 'Cricket'];
  val = 0;
  news;
  plt;
  constructor(private dummy: DummyService, private router: Router) {
    this.plt = localStorage.getItem('platform');
    this.news = this.dummy.news;
  }

  ngOnInit() {
  }

  selectChip(val) {
    console.log(val);
    this.val = val;
  }

  goToSingleVideo() {
    this.router.navigate(['/single-video']);
  }

  goToNotification() {
    this.router.navigate(['/notification']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

}
