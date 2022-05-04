import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss'],
})
export class LoginPage {
    constructor(private route: Router) {
    }
}
