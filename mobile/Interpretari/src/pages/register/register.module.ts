import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { InputFieldModule } from '../../components/input-field/input-field.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    InputFieldModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule { }
