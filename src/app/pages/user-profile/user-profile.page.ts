import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { DummyService } from 'src/app/services/dummy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  val = 0;
  text = 'All Type';
  chips = ['Activity', 'Saves', 'History'];
  notification;
  constructor(private actionSheetController: ActionSheetController, private dummy: DummyService, private router: Router) {
    this.notification = this.dummy.news;
  }

  ngOnInit() {
  }

  selectChip(val) {
    console.log(val);
    this.val = val;
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      mode : 'md',
      buttons: [{
        text: 'All Type',
        icon: 'list-outline',
        handler: () => {
          this.text = 'All Type';
        }
      }, {
        text: 'Comments',
        icon: 'chatbox-outline',
        handler: () => {
          this.text = 'Comments';
        }
      }, {
        text: 'Shares',
        icon: 'share-social-outline',
        handler: () => {
          this.text = 'Shares';
        }
      }, {
        text: 'Likes',
        icon: 'thumbs-up-sharp',
        handler: () => {
          this.text = 'Likes';
        }
      }]
    });
    await actionSheet.present();
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

  goToNotification() {
    this.router.navigate(['/notification']);
  }

}
