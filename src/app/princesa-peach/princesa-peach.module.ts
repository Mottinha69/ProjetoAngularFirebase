import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincesaPeachPageRoutingModule } from './princesa-peach-routing.module';

import { PrincesaPeachPage } from './princesa-peach.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincesaPeachPageRoutingModule
  ],
  declarations: [PrincesaPeachPage]
})
export class PrincesaPeachPageModule {}
