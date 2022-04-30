import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private route: Router) {
    this.go();
  }

  go() {
    interval(3000).subscribe(x => {
      this.route.navigate(['/intro']);
    });
  }
}
