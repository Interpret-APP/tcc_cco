import { Component, OnInit } from '@angular/core';
import { Certificado, Representative } from '../entidade-home/certificado';
import { CertificadoService } from '../entidade-home/certificadoservice';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-entidade-home',
  templateUrl: './entidade-home.component.html',
  styleUrls: ['./entidade-home.component.css'],
})
export class EntidadeHomeComponent implements OnInit {

  certificados: Certificado[];

  certificado: Certificado[];

  representatives: Representative[];

  statuses: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  dt: any;

  constructor(private certificadoService: CertificadoService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

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
}