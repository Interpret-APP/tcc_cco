import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
})
export class PersonalInfoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isDisabled: boolean = true;
  isRetract: string = 'retrair';
  onEdit: string = '';
  offEdit: string = 'ocultar';

  nome: string = 'Fulano da Silva';
  nome1: string = '';

  changeInfo() {
    if (this.isDisabled) {
      this.isRetract = "expandir";
      this.onEdit = "ocultar";
      this.offEdit = "";
    } else {
      this.isRetract = "retrair";
      this.onEdit = "";
      this.offEdit = "ocultar";

      if (this.nome1 != this.nome) {
        this.nome1 = this.nome;
        console.log("Nome atualizado para " + this.nome1);
      }
    }
    this.isDisabled = !this.isDisabled;
  }
}