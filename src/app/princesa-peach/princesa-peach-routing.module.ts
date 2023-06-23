import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincesaPeachPage } from './princesa-peach.page';

const routes: Routes = [
  {
    path: '',
    component: PrincesaPeachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincesaPeachPageRoutingModule {}
