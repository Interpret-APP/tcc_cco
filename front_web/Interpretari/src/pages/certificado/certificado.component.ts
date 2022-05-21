import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.css']
})
export class CertificadoComponent implements OnInit {

  certificado: any[];
  
  constructor() { }

  ngOnInit(): void {
    this.certificado = [
      { img: '', title: 'Certificado MobLang 2022', interpreter: 'Fulano da Silva Santos', date: '07 Oct, 2019', status: 'Pendente', type: 'Diploma', download: '', actions: '' },
      { img: '', title: 'Certificado MobLang 2022', interpreter: 'Fulano da Silva Santos', date: '07 Oct, 2019', status: 'Pendente', type: 'Diploma', download: '', actions: '' },
      { img: '', title: 'Certificado MobLang 2022', interpreter: 'Fulano da Silva Santos', date: '07 Oct, 2019', status: 'Pendente', type: 'Certificado', download: '', actions: '' },
      { img: '', title: 'Certificado MobLang 2022', interpreter: 'Fulano da Silva Santos', date: '07 Oct, 2019', status: 'Pendente', type: 'Carta de Recomendação', download: '', actions: '' },
      { img: '', title: 'Certificado MobLang 2022', interpreter: 'Fulano da Silva Santos', date: '07 Oct, 2019', status: 'Pendente', type: 'Certificado', download: '', actions: '' },
      { img: '', title: 'Certificado MobLang 2022', interpreter: 'Fulano da Silva Santos', date: '07 Oct, 2019', status: 'Pendente', type: 'Certidão', download: '', actions: '' },
      { img: '', title: 'Certificado MobLang 2022', interpreter: 'Fulano da Silva Santos', date: '07 Oct, 2019', status: 'Pendente', type: 'Carta de Recomendação', download: '', actions: '' },
    ];
  }

}
