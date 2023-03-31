import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { DummyService } from 'src/app/services/dummy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-paper',
  templateUrl: './single-paper.page.html',
  styleUrls: ['./single-paper.page.scss'],
})
export class SinglePaperPage implements OnInit {

  chips = ['All Categories', 'Home', 'India', 'Business', 'Politics',
  'World', 'Entertainment', 'Sports', 'Lifestyle', 'Tech', 'Bollywood', 'Hollywood', 'Cricket',
  'Tennis', 'Soccer', 'Life', 'Health', 'Realtionship'];
  val = 1;
  news;
  constructor(private dummy: DummyService, private router: Router) {
    this.news = this.dummy.news;
  }

  ngOnInit() {
  }

  selectChip(val) {
    console.log(val);
    this.val = val;
  }

  goToSinglePost() {
    this.router.navigate(['/single-post']);
  }
}
