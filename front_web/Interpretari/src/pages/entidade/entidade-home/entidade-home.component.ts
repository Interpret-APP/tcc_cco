import { Component, OnInit } from '@angular/core';
import { Certificado, Representative } from '../entidade-home/certificado';
import { CertificadoService } from './certificadoservice';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-entidade-home',
  templateUrl: './entidade-home.component.html',
  styleUrls: ['./entidade-home.component.css'],
  providers: [DialogService]
})
export class EntidadeHomeComponent implements OnInit {

  certificados: Certificado[];

  certificado: Certificado;

  representatives: Representative[];

  statuses: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  dt: any;

  avaliarDialog: boolean;
  submitted: boolean;

  desfazerDialog: boolean;

  constructor(private certificadoService: CertificadoService, private messageService: MessageService, private confirmationService: ConfirmationService, public dialogService: DialogService) { }

  ngOnInit() {
    this.certificadoService.getCertificadosLarge().then(certificados => {
      this.certificados = certificados;
      this.loading = false;

      this.certificados.forEach(certificados => certificados.date = new Date(certificados.date));

      this.statuses = [
        { label: "Pendente", value: "pendente" },
        { label: "Rejeitado", value: "rejeitado" },
        { label: "Validado", value: "validado" }
      ];
    });
  }

  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  dialogAvaliar(certificado: Certificado) {
    this.certificado = { ...certificado };

    if (this.certificados[this.findIndexById(this.certificado.id)] = this.certificado) {
      if (this.certificado.acoes == "Avaliar") {
        this.avaliarDialog = true;
      } else {
        this.desfazerDialog = true;
      }
    }
  }

  rejeitarCertificado(certificado: Certificado) {
    this.certificado.status = "Rejeitado";
    this.avaliarDialog = false;
    this.submitted = true;

    if (this.certificado.titulo.trim()) {
      if (this.certificado.id) {
        this.certificados[this.findIndexById(this.certificado.id)] = this.certificado;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Certificado Atualizado', life: 3000 });
        this.certificado.acoes = "Desfazer";
      }
    }
  }

  validarCertificado(certificado: Certificado) {
    this.certificado.status = "Validado";
    this.avaliarDialog = false;
    this.submitted = true;

    if (this.certificado.titulo.trim()) {
      if (this.certificado.id) {
        this.certificados[this.findIndexById(this.certificado.id)] = this.certificado;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Certificado Atualizado', life: 3000 });
        this.certificado.acoes = "Desfazer";
      }
    }
  }

  voltar(certificado: Certificado) {
    this.desfazerDialog = false;
  }

  desfazer(certificado: Certificado) {
    this.certificado.status = "Pendente";
    this.certificado.acoes = "Avaliar";
    this.desfazerDialog = false;
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.certificados.length; i++) {
      if (this.certificados[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }
}