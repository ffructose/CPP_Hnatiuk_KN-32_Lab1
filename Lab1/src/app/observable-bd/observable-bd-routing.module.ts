import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservableBdPage } from './observable-bd.page';

const routes: Routes = [
  {
    path: '',
    component: ObservableBdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservableBdPageRoutingModule {}
