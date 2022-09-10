import { Component, OnInit } from '@angular/core';
import { BooleanValueAccessor, ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-professional-info',
  templateUrl: './professional-info.page.html',
  styleUrls: ['./professional-info.page.scss'],
})
export class ProfessionalInfoPage implements OnInit {
  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  isDisabled: boolean = true;
  onEdit: string = "";
  offEdit: string = "ocultar";

  proficiencia = [];
  idioma_traducao: boolean = false;
  idioma_interpretacao: boolean = false;
  idiomaT = this.idioma_traducao? "ativo":"desativo";
  idiomaI = this.idioma_interpretacao? "ativo":"desativo";

  idioma_partida: string = "";
  nativo_partida: boolean = false;
  idioma_chegada: string = "";
  nativo_chegada: boolean = false;
  proficienciaList = [];

  certificacaoList = [];

  changeBool() {
    if(this.isDisabled) {
      this.onEdit = "ocultar";
      this.offEdit = "";
    } else {
      this.onEdit = "";
      this.offEdit = "ocultar";
    }
    this.isDisabled = !this.isDisabled;
  }

  addProficiencia() {
    if (this.idioma_partida.length > 0) {
      if (this.idioma_chegada.length > 0) {

        if (this.idioma_traducao = true) {
          this.proficiencia.push("ativo");
        } else {
          this.proficiencia.push("desativo");
        }

        if (this.idioma_interpretacao = true) {
          this.proficiencia.push("ativo");
        } else {
          this.proficiencia.push("desativo");
        }

        let partida = this.idioma_partida;
        this.proficiencia.push(partida);
        // this.idioma_partida = "";

        let chegada = this.idioma_chegada;
        this.proficiencia.push(chegada);
        // this.idioma_chegada = "";
      }
    }
    this.proficienciaList.push(this.proficiencia);
    this.idioma_traducao = false;
    this.idioma_interpretacao = false;
    this.modalCtrl.dismiss();
    console.log(this.proficienciaList);
    // this.proficienciaList.pop(this.proficiencia);
  }

  removeProficiencia(index) {
    this.proficienciaList.splice(index, 1);
  }
}