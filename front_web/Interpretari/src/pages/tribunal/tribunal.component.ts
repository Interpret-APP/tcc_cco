import { Component, OnInit } from '@angular/core';
import { Audiencia, Representative } from '../tribunal/audiencia';
import { AudienciaService } from '../tribunal/audienciaservice';

@Component({
  selector: 'app-tribunal',
  templateUrl: './tribunal.component.html',
  styleUrls: ['./tribunal.component.css'],
})
export class TribunalComponent implements OnInit {

  audiencias: Audiencia[];

  representatives: Representative[];

  statuses: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  dt: any;

  constructor(private audienciaService: AudienciaService) { }

  ngOnInit() {
    this.audienciaService.getAudienciasLarge().then(audiencias => {
      this.audiencias = audiencias;
      this.loading = false;

      this.audiencias.forEach(audiencias => audiencias.date = new Date(audiencias.date));
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
