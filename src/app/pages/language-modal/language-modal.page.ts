import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-language-modal',
  templateUrl: './language-modal.page.html',
  styleUrls: ['./language-modal.page.scss'],
})
export class LanguageModalPage implements OnInit {

  lang;
  constructor(private dummy: DummyService, private modalCtrl: ModalController) {
    this.lang = this.dummy.lang;
  }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

  getColor(val) {
    return '1px solid ' + val;
  }

}
