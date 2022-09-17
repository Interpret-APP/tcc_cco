import { Component, OnInit } from '@angular/core';
import { BooleanValueAccessor, ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-professional-info',
  templateUrl: './professional-info.page.html',
  styleUrls: ['./professional-info.page.scss'],
})
export class ProfessionalInfoPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() { }

  isDisabled: boolean = true;
  onEdit: string = "";
  offEdit: string = "ocultar";

  changeBool() {
    if (this.isDisabled) {
      this.onEdit = "ocultar";
      this.offEdit = "";
    } else {
      this.onEdit = "";
      this.offEdit = "ocultar";
    }
    this.isDisabled = !this.isDisabled;
  }

  proficienciaList = [
    {
      onTraducao: 'true',
      onInterpretacao: 'true',
      idioma_partida: 'Português',
      nativo_partida: 'true',
      idioma_chegada: 'Inglês',
      nativo_chegada: 'true',
    },
    {
      onTraducao: 'false',
      onInterpretacao: 'true',
      idioma_partida: 'Inglês',
      nativo_partida: 'true',
      idioma_chegada: 'Português',
      nativo_chegada: 'true',
    },
    {
      onTraducao: 'true',
      onInterpretacao: 'false',
      idioma_partida: 'Alemão',
      nativo_partida: 'true',
      idioma_chegada: 'Inglês',
      nativo_chegada: 'true',
    },
    {
      onTraducao: 'true',
      onInterpretacao: 'true',
      idioma_partida: 'Inglês',
      nativo_partida: 'true',
      idioma_chegada: 'Alemão',
      nativo_chegada: 'true',
    }
  ];
  
  onTraducao
  onInterpretacao
  idioma_partida
  nativo_partida
  idioma_chegada
  nativo_chegada

  newProficiencia

  addProficiencia() {
    this.newProficiencia = ({
      onTraducao: this.onTraducao,
      onInterpretacao: this.onInterpretacao,
      idioma_partida: this.idioma_partida,
      nativo_partida: this.nativo_partida,
      idioma_chegada: this.idioma_chegada,
      nativo_chegada: this.nativo_chegada,
    })
    this.modalCtrl.dismiss();
    this.proficienciaList.push(this.newProficiencia);
    console.log(this.proficienciaList);
  }

  removeProficiencia(index) {
    this.proficienciaList.splice(index, 1);
  }

  certificacaoList = [
    {
      tipo: 'Diploma',
      download: '../../assets/images/professional-info/download_icon.svg',
      desc: 'PUC Formação A...',
      data: '12/11/19',
      status: 'validado',
    },
    {
      tipo: 'Diploma',
      download: '../../assets/images/professional-info/download_icon.svg',
      desc: 'MobiLang 2022',
      data: '12/11/22',
      status: 'pendente',
    },
    {
      tipo: 'Diploma',
      download: '../../assets/images/professional-info/download_icon.svg',
      desc: 'UNB - Mobilang B...',
      data: '12/11/20',
      status: 'rejeitado',
    }
  ]








  idioma_traducao: boolean = false;
  idioma_interpretacao: boolean = false;
  idiomaT = this.idioma_traducao ? "ativo" : "desativo";
  idiomaI = this.idioma_interpretacao ? "ativo" : "desativo";

  // idioma_partida: string = "";
  // nativo_partida: boolean = false;
  // idioma_chegada: string = "";
  // nativo_chegada: boolean = false;

  // certificacaoList = [];



  // addProficiencia() {
  //   if (this.idioma_partida.length > 0) {
  //     if (this.idioma_chegada.length > 0) {

  //       if (this.idioma_traducao = true) {
  //         // this.proficiencia.push("ativo");
  //       } else {
  //         // this.proficiencia.push("desativo");
  //       }

  //       if (this.idioma_interpretacao = true) {
  //         // this.proficiencia.push("ativo");
  //       } else {
  //         // this.proficiencia.push("desativo");
  //       }

  //       let partida = this.idioma_partida;
  //       // this.proficiencia.push(partida);
  //       // this.idioma_partida = "";

  //       let chegada = this.idioma_chegada;
  //       // this.proficiencia.push(chegada);
  //       // this.idioma_chegada = "";
  //     }
  //   }
  //   // this.proficienciaList.push(this.proficiencia);
  //   this.idioma_traducao = false;
  //   this.idioma_interpretacao = false;
  //   // this.idioma_partida = "";
  //   // this.idioma_chegada = "";
  //   // this.modalCtrl.dismiss();
  //   console.log(this.proficienciaList);
  //   // this.proficienciaList.pop(this.proficiencia);
  // }

  // removeProficiencia(index) {
  //   this.proficienciaList.splice(index, 1);
  // }
}