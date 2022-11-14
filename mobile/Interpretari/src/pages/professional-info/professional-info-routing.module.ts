import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessionalInfoPage } from './professional-info.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessionalInfoPageRoutingModule {}
