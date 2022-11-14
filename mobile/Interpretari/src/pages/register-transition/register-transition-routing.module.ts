import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterTransitionPage } from './register-transition.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterTransitionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterTransitionPageRoutingModule {}
