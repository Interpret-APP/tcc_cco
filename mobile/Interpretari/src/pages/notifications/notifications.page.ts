import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  notificationsList = [
    {
      endereco: 'Rua ABCDE, 123 - São Paulo - SP',
      idioma_partida: 'Português',
      idioma_chegada: 'Alemão',
      traducao: 'true',
      interpretacao: 'true',
      modo: 'Presencial',
      status: 'recusado',
    },
    {
      endereco: 'Rua ABCDE, 123 - São Paulo - SP',
      idioma_partida: 'Português',
      idioma_chegada: 'Alemão',
      traducao: 'true',
      interpretacao: 'true',
      modo: 'Remoto',
      status: 'selecionado',
    },
    {
      endereco: 'Rua ABCDE, 123 - São Paulo - SP',
      idioma_partida: 'Português',
      idioma_chegada: 'Alemão',
      traducao: 'true',
      interpretacao: 'true',
      modo: 'Presencial',
      status: 'cancelado',
    }
  ];
}
