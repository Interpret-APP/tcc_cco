import { Component, OnInit } from '@angular/core';

interface Tipo {
  name: string
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  tipos: Tipo[];

  selectedTipo: Tipo;

  constructor() {
    this.tipos = [
      { name: 'New York' }
    ];
  }

  ngOnInit() { };
}