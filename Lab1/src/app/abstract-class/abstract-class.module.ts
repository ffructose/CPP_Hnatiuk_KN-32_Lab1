import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbstractClassPageRoutingModule } from './abstract-class-routing.module';

import { AbstractClassPage } from './abstract-class.page';
import { Furniture } from './Class/furniture';
import { Cupboard } from './Class/cupboard';
import { Sofa } from './Class/sofa';
import { Table } from './Class/table';
import {MyHeaderModule} from './../my-header/my-header.component.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbstractClassPageRoutingModule, MyHeaderModule
  ],
  declarations: [AbstractClassPage]
})
export class AbstractClassPageModule {}
