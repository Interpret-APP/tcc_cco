import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkStationsPage } from './work-stations.page';

const routes: Routes = [
  {
    path: '',
    component: WorkStationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkStationsPageRoutingModule {}
