import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  profilePicture$: Observable<string>;
  isActive: boolean = true;
  buttonState = [
    { state: true },
  ];

  constructor() { }

  ngOnInit() {
  }

  activeCheck(name) {
    console.log(name);
    this.isActive = !this.isActive;
  }

  buttonValue = 0;

  onClick() {
    if (this.buttonValue == 1) {
      this.buttonValue = 0;
      console.log("azul");
    }else{
      this.buttonValue == 0;
    }
  }
}