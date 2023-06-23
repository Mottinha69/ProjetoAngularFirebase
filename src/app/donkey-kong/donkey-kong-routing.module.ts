import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonkeyKongPage } from './donkey-kong.page';

const routes: Routes = [
  {
    path: '',
    component: DonkeyKongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonkeyKongPageRoutingModule {}
