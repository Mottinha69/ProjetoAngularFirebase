import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShyGuyPageRoutingModule } from './shy-guy-routing.module';

import { ShyGuyPage } from './shy-guy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShyGuyPageRoutingModule
  ],
  declarations: [ShyGuyPage]
})
export class ShyGuyPageModule {}
