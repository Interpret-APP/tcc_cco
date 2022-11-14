import { Component, OnInit } from '@angular/core';
import { Certificado } from '../entidade-home/certificado';
import { CertificadoService } from '../entidade-home/certificadoservice';

@Component({
  selector: 'app-entrevista',
  templateUrl: './entidade-entrevista.component.html',
  styleUrls: ['./entidade-entrevista.component.css']
})
export class EntidadeEntrevistaComponent implements OnInit {

  certificados: Certificado[];

  certificado: Certificado;

  statuses: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  dt: any;

  avaliarDialog: boolean;
  submitted: boolean;

  desfazerDialog: boolean;

  text: string;

  constructor(private certificadoService: CertificadoService) { }

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
}
