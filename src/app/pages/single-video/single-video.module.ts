import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleVideoPageRoutingModule } from './single-video-routing.module';

import { SingleVideoPage } from './single-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleVideoPageRoutingModule
  ],
  declarations: [SingleVideoPage]
})
export class SingleVideoPageModule {}
