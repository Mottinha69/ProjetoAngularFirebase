import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiddyKongPage } from './diddy-kong.page';

const routes: Routes = [
  {
    path: '',
    component: DiddyKongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiddyKongPageRoutingModule {}
