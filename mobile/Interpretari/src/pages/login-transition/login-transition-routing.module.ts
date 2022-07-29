import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginTransitionPage } from './login-transition.page';

const routes: Routes = [
  {
    path: '',
    component: LoginTransitionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginTransitionPageRoutingModule {}
