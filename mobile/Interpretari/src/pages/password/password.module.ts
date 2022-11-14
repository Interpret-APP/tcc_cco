import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PasswordPageRoutingModule } from './password-routing.module';
import { PasswordPage } from './password.page';
import { InputFieldModule } from '../../components/input-field/input-field.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordPageRoutingModule,
    InputFieldModule,
  ],
  declarations: [PasswordPage]
})
export class PasswordPageModule {}
