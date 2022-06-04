import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

// Pages Components
import { LoginComponent } from '../pages/login/login.component';

// Visão Entidade Certificadora
import { EntidadeHomeComponent } from '../pages/entidade/entidade-home/entidade-home.component';
import { EntidadeEntrevistaComponent } from '../pages/entidade/entidade-entrevista/entidade-entrevista.component';

// Visão Admin
import { AdminInterpreteComponent } from '../pages/admin/admin-interprete/admin-interprete.component';
import { InterpreteService } from '../pages/admin/admin-interprete/interpreteservice';

import { HomeComponent } from '../pages/home/home.component';
import { CertificadoComponent } from '../pages/certificado/certificado.component';
import { TribunalComponent } from '../pages/tribunal/tribunal.component';
import { JudiciariaComponent } from '../pages//judiciaria/judiciaria.component';
import { CadastroComponent } from '../pages/cadastro/cadastro.component';

// PrimeNG Modules
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu'; //
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { Slider, SliderModule } from 'primeng/slider';
import { EditorModule } from 'primeng/editor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CertificadoService } from '../pages/entidade/entidade-home/certificadoservice';
import { HttpClientModule } from '@angular/common/http';

import { AudienciaService } from '../pages/judiciaria/audienciaservice';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { PasswordComponent } from './password/password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EntidadeHomeComponent,
    EntidadeEntrevistaComponent,
    AdminInterpreteComponent,

    HomeComponent,
    CertificadoComponent,
    TribunalComponent,
    JudiciariaComponent,
    CadastroComponent,

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
    TableModule,
    DynamicDialogModule,
    DialogModule,
    ConfirmDialogModule,

    MultiSelectModule,
    DropdownModule,
    SliderModule,
    EditorModule,

    BrowserAnimationsModule,
    HttpClientModule,

    FormsModule,

    PaginatorModule,

    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },

      { path: 'entidade-home', component: EntidadeHomeComponent },
      { path: 'entidade-entrevista', component: EntidadeEntrevistaComponent },

      { path: 'admin-interprete', component: AdminInterpreteComponent },

      { path: 'inicio', component: HomeComponent },
      { path: 'lista-certificados', component: CertificadoComponent },

      { path: 'tribunal', component: TribunalComponent},
      { path: 'unidade-judiciaria', component: JudiciariaComponent},
      { path: 'cadastro', component: CadastroComponent},

      { path: 'register', component: RegisterComponent },
      { path: 'password', component: PasswordComponent },
    ]),
  ],
  providers: [CertificadoService, AudienciaService, ConfirmationService, MessageService, InterpreteService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() { }

  ngOnInit(): void {
  }
}
