import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinglePaperPage } from './single-paper.page';

const routes: Routes = [
  {
    path: '',
    component: SinglePaperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglePaperPageRoutingModule {}
