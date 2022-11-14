import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './login.page';

import { LoginPageRoutingModule } from './login-routing.module';

// import { InputFieldComponent } from '../../components/input-field/input-field.component';
import { InputFieldModule } from '../../components/input-field/input-field.module'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LoginPageRoutingModule,
        InputFieldModule,
    ],
    declarations: [LoginPage]
})
export class LoginPageModule { }
