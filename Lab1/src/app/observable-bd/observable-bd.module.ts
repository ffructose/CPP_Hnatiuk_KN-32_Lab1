import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObservableBdPageRoutingModule } from './observable-bd-routing.module';

import { ObservableBdPage } from './observable-bd.page';

import {MyHeaderModule} from './../my-header/my-header.component.module'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObservableBdPageRoutingModule,
    MyHeaderModule
  ],
  declarations: [ObservableBdPage]
})
export class ObservableBdPageModule {}
