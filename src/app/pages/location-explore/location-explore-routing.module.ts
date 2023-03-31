import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationExplorePage } from './location-explore.page';

const routes: Routes = [
  {
    path: '',
    component: LocationExplorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationExplorePageRoutingModule {}
