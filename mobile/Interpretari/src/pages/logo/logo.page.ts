import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: 'logo.page.html',
  styleUrls: ['logo.page.scss'],
})
export class LogoPage {
  constructor(private route: Router) {
    this.go();
  }

  go() {
    interval(3000).subscribe(x => {
      this.route.navigate(['/intro']);
    });
  }
}
