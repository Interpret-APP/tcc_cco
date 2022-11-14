import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginTransitionPageRoutingModule } from './login-transition-routing.module';

import { LoginTransitionPage } from './login-transition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginTransitionPageRoutingModule
  ],
  declarations: [LoginTransitionPage]
})
export class LoginTransitionPageModule {}
