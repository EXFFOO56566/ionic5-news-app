import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglePaperPageRoutingModule } from './single-paper-routing.module';

import { SinglePaperPage } from './single-paper.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinglePaperPageRoutingModule
  ],
  declarations: [SinglePaperPage]
})
export class SinglePaperPageModule {}
