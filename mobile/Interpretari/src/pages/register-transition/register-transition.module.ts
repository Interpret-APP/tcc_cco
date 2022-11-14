import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterTransitionPageRoutingModule } from './register-transition-routing.module';

import { RegisterTransitionPage } from './register-transition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterTransitionPageRoutingModule
  ],
  declarations: [RegisterTransitionPage]
})
export class RegisterTransitionPageModule {}
