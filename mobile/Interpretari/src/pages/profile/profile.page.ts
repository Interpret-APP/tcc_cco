import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  personalStatus: string = 'ativo';
  professionalStatus: string = 'desativo';
  workStatus: string = 'desativo';

  personalBtn() {
    if(this.personalStatus = 'desativo') {
      this.personalStatus = 'ativo';
      this.professionalStatus = 'desativo';
      this.workStatus = 'desativo';
    }
  }

  professionalBtn() {
    if(this.professionalStatus = 'desativo') {
      this.professionalStatus = 'ativo';
      this.workStatus = 'desativo';
      this.personalStatus = 'desativo';
    }
  }

  workBtn() {
    if(this.workStatus = 'desativo') {
      this.workStatus = 'ativo';
      this.personalStatus = 'desativo';
      this.professionalStatus = 'desativo';
    }
  }
}
