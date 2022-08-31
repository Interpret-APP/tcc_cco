import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  homeStatus: string = 'ativo';
  notificationStatus: string = 'desativo';
  profileStatus: string = 'desativo';
  configurationStatus: string = 'desativo';

  onHome() {
    if(this.homeStatus = "desativo"){
      this.homeStatus = "ativo";
      this.notificationStatus = "desativo";
      this.profileStatus = "desativo";
      this.configurationStatus = "desativo";
    }
  }

  onNotification() {
    if(this.notificationStatus = "desativo"){
      this.notificationStatus = "ativo";
      this.profileStatus = "desativo";
      this.configurationStatus = "desativo";
      this.homeStatus = "desativo";
    }
  }

  onProfile() {
    if(this.profileStatus = "desativo"){
      this.profileStatus = "ativo";
      this.configurationStatus = "desativo";
      this.homeStatus = "desativo";
      this.notificationStatus = "desativo";
    }
  }

  onConfiguration() {
    if(this.configurationStatus = "desativo"){
      this.configurationStatus = "ativo";
      this.homeStatus = "desativo";
      this.notificationStatus = "desativo";
      this.profileStatus = "desativo";
    }
  }
}