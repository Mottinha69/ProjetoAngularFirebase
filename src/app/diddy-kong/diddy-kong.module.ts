import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiddyKongPageRoutingModule } from './diddy-kong-routing.module';

import { DiddyKongPage } from './diddy-kong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiddyKongPageRoutingModule
  ],
  declarations: [DiddyKongPage]
})
export class DiddyKongPageModule {}
