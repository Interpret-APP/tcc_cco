import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  items: MenuItem[];

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.items = [{
      items: [{
        label: 'Página Inicial',
        icon: 'pi pi-home',
        command: () => {
          this.goToHome();
        }
      },
      {
        label: 'Lista de Certificados',
        icon: 'pi pi-bars',
        command: () => {
          this.goToCertificate();
        }
      },
      {
        label: 'Entrevistas',
        icon: 'pi pi-times',
        command: () => {
          this.goToInterview();
        }
      },
      ]
    },
    {
      label: 'Usuários',
      items: [{
        label: 'Tribunal',
        icon: 'pi pi-external-link',
        command: () => {
          this.goToCourt();
        }
      },
      {
        label: 'Unidade Judiciária',
        icon: 'pi pi-upload',
        command: () => {
          this.goToJudicial();
        }
      },
      {
        label: 'Entidade Certificadora',
        icon: 'pi pi-upload',
        command: () => {
          this.goToCertifier();
        }
      },
      {
        label: 'Intérpretes',
        icon: 'pi pi-upload',
        command: () => {
          this.goToInterpreter();
        }
      },
      ]
    },
    {
      label: 'Configurações',
      items: [{
        label: 'Meus Dados',
        icon: 'pi pi-external-link',
        command: () => {
          this.goToData();
        }
      },
      {
        label: 'Sair',
        icon: 'pi pi-upload',
        command: () => {
          this.goToLogin();
        }
      }
      ]
    }
    ];
  }

  goToHome() {
    this.route.navigate(['/home']);
  }

  goToCertificate() {
    this.route.navigate(['/certificate']);
  }

  goToInterview() {
    this.route.navigate(['/interview']);
  }

  goToCourt() {
    this.route.navigate(['/court']);
  }

  goToJudicial() {
    this.route.navigate(['/judicial']);
  }

  goToCertifier() {
    this.route.navigate(['/certifier']);
  }

  goToInterpreter() {
    this.route.navigate(['/interpreter']);
  }

  goToData() {
    this.route.navigate(['/data']);
  }

  goToLogin() {
    this.route.navigate(['/login']);
  }
}