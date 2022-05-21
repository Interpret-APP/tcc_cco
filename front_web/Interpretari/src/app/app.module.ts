import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

// Pages Components
import { LoginComponent } from '../pages/login/login.component';
import { HomeComponent } from '../pages/home/home.component';
import { CertificadoComponent } from '../pages/certificado/certificado.component';
import { EntrevistaComponent } from '../pages/entrevista/entrevista.component';

// PrimeNG Modules
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu'; //
import { TableModule } from 'primeng/table';
import { EditorModule } from 'primeng/editor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Sidebar
// import { MenuItem } from 'primeng/api';
// import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';



import { RegisterComponent } from './register/register.component';
import { PasswordComponent } from './password/password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CertificadoComponent,
    EntrevistaComponent,

    RegisterComponent,
    PasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    InputTextModule,
    ImageModule,
    PasswordModule,
    ButtonModule,
    MenuModule, //
    BrowserAnimationsModule,
    TableModule,
    EditorModule,

    FormsModule,

    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'inicio', component: HomeComponent },
      { path: 'lista-certificados', component: CertificadoComponent },
      { path: 'entrevistas', component: EntrevistaComponent },

      { path: 'register', component: RegisterComponent },
      { path: 'password', component: PasswordComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() { }

  ngOnInit(): void {
  }
}
