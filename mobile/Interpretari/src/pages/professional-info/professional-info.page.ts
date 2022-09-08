import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-info',
  templateUrl: './professional-info.page.html',
  styleUrls: ['./professional-info.page.scss'],
})
export class ProfessionalInfoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isDisabled: boolean = true;
  // isHidden: string = "hide";
  onEdit: string = "";
  offEdit: string = "ocultar";

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
}