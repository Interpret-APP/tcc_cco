import { Component, OnInit } from '@angular/core';
import { Interprete } from '../admin-interprete/interprete';
import { InterpreteService } from './interpreteservice';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-admin-interprete',
  templateUrl: './admin-interprete.component.html',
  styleUrls: ['./admin-interprete.component.css'],
  providers: [DialogService]
})
export class AdminInterpreteComponent implements OnInit {

  interpretes: Interprete[];

  interprete: Interprete;

  statuses: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  dt: any;

  avaliarDialog: boolean;
  submitted: boolean;

  desfazerDialog: boolean;

  constructor(private interpreteService: InterpreteService, private messageService: MessageService, private confirmationService: ConfirmationService, public dialogService: DialogService) { }

  ngOnInit() {
    this.interpreteService.getInterpretesLarge().then(interpretes => {
      this.interpretes = interpretes;
      this.loading = false;

      this.interpretes.forEach(interpretes => interpretes.date = new Date(interpretes.date));

      this.statuses = [
        { label: "Ativo", value: "ativo" },
        { label: "Inativo", value: "inativo" }
      ];
    });
  }

  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  verDetalhes(interprete: Interprete) {
    
  }
}