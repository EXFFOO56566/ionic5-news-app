import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PapersListPageRoutingModule } from './papers-list-routing.module';

import { PapersListPage } from './papers-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PapersListPageRoutingModule
  ],
  declarations: [PapersListPage]
})
export class PapersListPageModule {}
