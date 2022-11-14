import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'logo',
    loadChildren: () => import('../pages/logo/logo.module').then(m => m.LogoPageModule)
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
    path: 'login-transition',
    loadChildren: () => import('../pages/login-transition/login-transition.module').then( m => m.LoginTransitionPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('../pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'register-transition',
    loadChildren: () => import('../pages/register-transition/register-transition.module').then( m => m.RegisterTransitionPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('../pages/password/password.module').then(m => m.PasswordPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('../pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'personal-info',
    loadChildren: () => import('../pages/personal-info/personal-info.module').then( m => m.PersonalInfoPageModule)
  },
  {
    path: 'professional-info',
    loadChildren: () => import('../pages/professional-info/professional-info.module').then( m => m.ProfessionalInfoPageModule)
  },
  {
    path: 'work-stations',
    loadChildren: () => import('../pages/work-stations/work-stations.module').then( m => m.WorkStationsPageModule)
  },
  {
    path: '',
    redirectTo: 'logo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
