import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.page.html',
  styleUrls: ['./papers.page.scss'],
})
export class PapersPage implements OnInit {

  papers;
  plt;
  constructor(private dummy: DummyService, private router: Router) {
    this.plt = localStorage.getItem('platform');
    this.papers = this.dummy.newspapers;
  }

  ngOnInit() {
  }

  goToPaperList() {
    this.router.navigate(['/papers-list']);
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
