import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PapersListPage } from './papers-list.page';

const routes: Routes = [
  {
    path: '',
    component: PapersListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PapersListPageRoutingModule {}
