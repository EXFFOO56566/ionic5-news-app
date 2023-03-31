import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recommended-list',
  templateUrl: './recommended-list.page.html',
  styleUrls: ['./recommended-list.page.scss'],
})
export class RecommendedListPage implements OnInit {

  papers;
  title;
  plt;
  constructor(private dummy: DummyService, private route: ActivatedRoute) {
    this.plt = localStorage.getItem('platform');

    this.route.queryParams.subscribe( data => {
      console.log(data);
      this.title = data.id;
    });
    this.papers = this.dummy.newspapers;
  }

  ngOnInit() {
  }

}
