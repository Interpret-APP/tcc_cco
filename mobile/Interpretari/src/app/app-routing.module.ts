import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'logo',
    loadChildren: () => import('../pages/logo/logo.module').then(m => m.LogoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('../pages/intro/intro.module').then(m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('../pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('../pages/password/password.module').then(m => m.PasswordPageModule)
  },
  {
    path: '',
    redirectTo: 'logo',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
