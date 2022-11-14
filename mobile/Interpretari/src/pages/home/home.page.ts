import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  postosList = [
    {
      dt_postagem: '12/07/2020 - até às 22h',
      endereco: 'Rua ABCDE, 123 - São Paulo - SP',
      dt_sessao: '15/09/2020 - 13h00 às 14:30',
      idioma_partida: 'Português',
      idioma_chegada: 'Alemão',
      traducao: true,
      interpretacao: true,
      dt_limite: '13/09/2020 - até às 22h',
      modo: 'Presencial',
    },
    {
      dt_postagem: '12/07/2020 - até às 22h',
      endereco: 'Rua ABCDE, 123 - São Paulo - SP',
      dt_sessao: '15/09/2020 - 13h00 às 14:30',
      idioma_partida: 'Português',
      idioma_chegada: 'Alemão',
      traducao: true,
      interpretacao: true,
      dt_limite: '13/09/2020 - até às 22h',
      modo: 'Remoto',
    },
    {
      dt_postagem: '12/07/2020 - até às 22h',
      endereco: 'Rua ABCDE, 123 - São Paulo - SP',
      dt_sessao: '15/09/2020 - 13h00 às 14:30',
      idioma_partida: 'Português',
      idioma_chegada: 'Alemão',
      traducao: true,
      interpretacao: false,
      dt_limite: '13/09/2020 - até às 22h',
      modo: 'Presencial',
    },
    {
      dt_postagem: '12/07/2020 - até às 22h',
      endereco: 'Rua ABCDE, 123 - São Paulo - SP',
      dt_sessao: '15/09/2020 - 13h00 às 14:30',
      idioma_partida: 'Português',
      idioma_chegada: 'Alemão',
      traducao: true,
      interpretacao: true,
      dt_limite: '13/09/2020 - até às 22h',
      modo: 'Remoto',
    },
    {
      dt_postagem: '12/07/2020 - até às 22h',
      endereco: 'Rua ABCDE, 123 - São Paulo - SP',
      dt_sessao: '15/09/2020 - 13h00 às 14:30',
      idioma_partida: 'Português',
      idioma_chegada: 'Alemão',
      traducao: true,
      interpretacao: true,
      dt_limite: '13/09/2020 - até às 22h',
      modo: 'Presencial',
    },
    {
      dt_postagem: '12/07/2020 - até às 22h',
      endereco: 'Rua ABCDE, 123 - São Paulo - SP',
      dt_sessao: '15/09/2020 - 13h00 às 14:30',
      idioma_partida: 'Português',
      idioma_chegada: 'Alemão',
      traducao: true,
      interpretacao: true,
      dt_limite: '13/09/2020 - até às 22h',
      modo: 'Remoto',
    },
    {
      dt_postagem: '12/07/2020 - até às 22h',
      endereco: 'Rua ABCDE, 123 - São Paulo - SP',
      dt_sessao: '15/09/2020 - 13h00 às 14:30',
      idioma_partida: 'Português',
      idioma_chegada: 'Alemão',
      traducao: true,
      interpretacao: true,
      dt_limite: '13/09/2020 - até às 22h',
      modo: 'Presencial',
    },
  ]
}
