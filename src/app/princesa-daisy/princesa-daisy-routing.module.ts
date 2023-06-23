import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincesaDaisyPage } from './princesa-daisy.page';

const routes: Routes = [
  {
    path: '',
    component: PrincesaDaisyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincesaDaisyPageRoutingModule {}
