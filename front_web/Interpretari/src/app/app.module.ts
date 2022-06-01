import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

// Pages Components
import { LoginComponent } from '../pages/login/login.component';

// Visão Entidade Certificadora
import { EntidadeHomeComponent } from '../pages/entidade/entidade-home/entidade-home.component';

import { HomeComponent } from '../pages/home/home.component';
import { CertificadoComponent } from '../pages/certificado/certificado.component';
import { EntrevistaComponent } from '../pages/entrevista/entrevista.component';
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

import { PaginatorModule } from 'primeng/paginator';

import { RegisterComponent } from './register/register.component';
import { PasswordComponent } from './password/password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EntidadeHomeComponent,

    HomeComponent,
    CertificadoComponent,
    EntrevistaComponent,
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

      { path: 'inicio', component: HomeComponent },
      { path: 'lista-certificados', component: CertificadoComponent },
      { path: 'entrevistas', component: EntrevistaComponent },
      { path: 'tribunal', component: TribunalComponent},
      { path: 'unidade-judiciaria', component: JudiciariaComponent},
      { path: 'cadastro', component: CadastroComponent},

      { path: 'register', component: RegisterComponent },
      { path: 'password', component: PasswordComponent },
    ]),
  ],
  providers: [CertificadoService, AudienciaService, ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() { }

  ngOnInit(): void {
  }
}
