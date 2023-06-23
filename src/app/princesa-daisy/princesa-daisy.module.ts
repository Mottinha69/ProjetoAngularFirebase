import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincesaDaisyPageRoutingModule } from './princesa-daisy-routing.module';

import { PrincesaDaisyPage } from './princesa-daisy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincesaDaisyPageRoutingModule
  ],
  declarations: [PrincesaDaisyPage]
})
export class PrincesaDaisyPageModule {}
