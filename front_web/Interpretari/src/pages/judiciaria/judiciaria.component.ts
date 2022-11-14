import { Component, OnInit } from '@angular/core';
import { Audiencia, Representative } from '../judiciaria/audiencia';
import { AudienciaService } from '../judiciaria/audienciaservice';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-judiciaria',
  templateUrl: './judiciaria.component.html',
  styleUrls: ['./judiciaria.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class JudiciariaComponent implements OnInit {

  audiencias: Audiencia[];

  representatives: Representative[];

  statuses: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  dt: any;

  audiencia: Audiencia[];
  audienciaDialog: boolean;
  submitted: boolean;

  constructor(private audienciaService: AudienciaService, private router: Router, private confirmationService: ConfirmationService, private messageService: MessageService) { }

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

  goToCadastro(): void {
    const navigationDetails: string[] = ['/cadastro'];
    this.router.navigate(navigationDetails);
  }

  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  // editAudiencia(audiencia: Audiencia) {
  //   this.audiencia = { ...audiencia };
  //   this.audienciaDialog = true;
  // }

  // deleteAudiencia(audiencia: Audiencia) {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure you want to delete ' + audiencia.id + '?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.audiencias = this.audiencias.filter(val => val.id !== audiencia.id);
  //       // this.audiencia = {};
  //       this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
  //     }
  //   });
  // }

  // hideDialog() {
  //   this.audienciaDialog = false;
  //   this.submitted = false;
  // }

  // saveAudiencia() {
  //   this.submitted = true;

  //   if (this.audiencia.id.trim()) {
  //     if (this.audiencia.processo) {
  //       this.audiencias[this.findIndexById(this.audiencia.processo)] = this.audiencia;
  //       this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
  //     }
  //     else {
  //       this.audiencia.processo = this.createId();
  //       this.audiencia.image = 'product-placeholder.svg';
  //       this.audiencia.push(this.audiencia);
  //       this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
  //     }

  //     this.audiencias = [...this.audiencias];
  //     this.audienciaDialog = false;
  //     this.audiencia = {};
  //   }
  // }

  // findIndexById(id: string): number {
  //   let index = -1;
  //   for (let i = 0; i < this.audiencias.length; i++) {
  //     if (this.audiencias[i].id === id) {
  //       index = i;
  //       break;
  //     }
  //   }

  //   return index;
  // }

  // createId(): string {
  //   let id = '';
  //   var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   for (var i = 0; i < 5; i++) {
  //     id += chars.charAt(Math.floor(Math.random() * chars.length));
  //   }
  //   return id;
  // }
}
