import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  users;
  constructor(private dummy: DummyService, private router: Router) {
    this.users = this.dummy.users;
  }

  ngOnInit() {
  }

  goToProfile() {
    this.router.navigate(['/user-profile']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

  goToNotification() {
    this.router.navigate(['/notification']);
  }

}
