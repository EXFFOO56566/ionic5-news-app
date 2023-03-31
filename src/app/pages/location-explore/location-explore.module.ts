import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationExplorePageRoutingModule } from './location-explore-routing.module';

import { LocationExplorePage } from './location-explore.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationExplorePageRoutingModule,
    ComponentModule
  ],
  declarations: [LocationExplorePage]
})
export class LocationExplorePageModule {}
