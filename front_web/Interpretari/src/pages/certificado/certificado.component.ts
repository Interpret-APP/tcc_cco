import { Component, OnInit } from '@angular/core';
import { Certificado, Representative } from '../certificado/certificado';
import { CertificadoService } from '../certificado/certificadoservice';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.css'],
})
export class CertificadoComponent implements OnInit {

  certificados: Certificado[];

  representatives: Representative[];

  statuses: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  dt: any;

  constructor(private certificadoService: CertificadoService) { }

  ngOnInit() {
    this.certificadoService.getCertificadosLarge().then(certificados => {
      this.certificados = certificados;
      this.loading = false;

      this.certificados.forEach(certificados => certificados.date = new Date(certificados.date));
    });

    // this.representatives = [
    //   { name: "Amy Elsner", image: 'amyelsner.png' },
    //   { name: "Anna Fali", image: 'annafali.png' },
    //   { name: "Asiya Javayant", image: 'asiyajavayant.png' },
    //   { name: "Bernardo Dominic", image: 'bernardodominic.png' },
    //   { name: "Elwin Sharvill", image: 'elwinsharvill.png' },
    //   { name: "Ioni Bowcher", image: 'ionibowcher.png' },
    //   { name: "Ivan Magalhaes", image: 'ivanmagalhaes.png' },
    //   { name: "Onyama Limba", image: 'onyamalimba.png' },
    //   { name: "Stephen Shaw", image: 'stephenshaw.png' },
    //   { name: "Xuxue Feng", image: 'xuxuefeng.png' }
    // ];

    // this.certificados = [
    //   {
    //     image: "../../assets/icons/download_img.png", titulo: "Certificado MobLang 2022"
    //   }
    // ]

    this.statuses = [
      { label: "Pendente", value: "pendente" },
    ];
  }

  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
