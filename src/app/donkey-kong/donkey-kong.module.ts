import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonkeyKongPageRoutingModule } from './donkey-kong-routing.module';

import { DonkeyKongPage } from './donkey-kong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonkeyKongPageRoutingModule
  ],
  declarations: [DonkeyKongPage]
})
export class DonkeyKongPageModule {}
