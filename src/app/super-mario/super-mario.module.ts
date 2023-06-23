import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperMarioPageRoutingModule } from './super-mario-routing.module';

import { SuperMarioPage } from './super-mario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperMarioPageRoutingModule
  ],
  declarations: [SuperMarioPage]
})
export class SuperMarioPageModule {}
