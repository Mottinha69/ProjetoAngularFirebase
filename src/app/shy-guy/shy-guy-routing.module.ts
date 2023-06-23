import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShyGuyPage } from './shy-guy.page';

const routes: Routes = [
  {
    path: '',
    component: ShyGuyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShyGuyPageRoutingModule {}
