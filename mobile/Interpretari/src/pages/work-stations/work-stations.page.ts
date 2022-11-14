import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-stations',
  templateUrl: './work-stations.page.html',
  styleUrls: ['./work-stations.page.scss'],
})
export class WorkStationsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  postoList = [
    {
      postado: '12/07/2020 - até às 22h',
      endereco: 'Rua ABCDE, 123 - São Paulo - SP',
      idioma_partida: 'Português',
      idioma_chegada: 'Alemão',
      traducao: 'true',
      interpretacao: 'true',
      data: '15/09/2020 - 13h00 às 14h30',
      status: 'finalizada',
      modo: 'presencial',
    },
    {
      postado: '12/07/2020 - até às 22h',
      endereco: 'Rua ABCDE, 123 - São Paulo - SP',
      idioma_partida: 'Inglês',
      idioma_chegada: 'Alemão',
      traducao: 'true',
      interpretacao: 'true',
      data: '15/09/2020 - 13h00 às 14h30',
      status: 'cancelada',
      modo: 'remoto',
    },
    {
      postado: '12/07/2020 - até às 22h',
      endereco: 'Rua ABCDE, 123 - São Paulo - SP',
      idioma_partida: 'Português',
      idioma_chegada: 'Alemão',
      traducao: 'true',
      interpretacao: 'true',
      data: '15/09/2020 - 13h00 às 14h30',
      status: 'finalizada',
      modo: 'presencial',
    },
    {
      postado: '12/07/2020 - até às 22h',
      endereco: 'Rua ABCDE, 123 - São Paulo - SP',
      idioma_partida: 'Português',
      idioma_chegada: 'Alemão',
      traducao: 'true',
      interpretacao: 'true',
      data: '15/09/2020 - 13h00 às 14h30',
      status: 'pendente',
      modo: 'presencial',
    }
  ];
}
