import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {

    }

    // login() {
    //     this.router.navigate(['intro']);
    // }

    // register() {
    //     this.router.navigate(['register']);
    // }
}