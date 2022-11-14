import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkStationsPageRoutingModule } from './work-stations-routing.module';

import { WorkStationsPage } from './work-stations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkStationsPageRoutingModule
  ],
  declarations: [WorkStationsPage]
})
export class WorkStationsPageModule {}
