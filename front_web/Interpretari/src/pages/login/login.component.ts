import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToHome(): void {
    const navigationDetails: string[] = ['/entidade-home'];
    this.router.navigate(navigationDetails);
  }

  // goToRegister(): void {
  //   const navigationDetails: string[] = ['/register'];
  //   this.router.navigate(navigationDetails);
  // }

  // goToPassword(): void {
  //   const navigationDetails: string[] = ['/password'];
  //   this.router.navigate(navigationDetails);
  // }
}
