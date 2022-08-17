import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    children: [
      {
        path: 'personal-info',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../personal-info/personal-info.module').then(
                x => x.PersonalInfoPageModule
              )
          }
        ]
      },
      {
        path: 'professional-info',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../professional-info/professional-info.module').then(
                x => x.ProfessionalInfoPageModule
              )
          }
        ]
      },
      {
        path: 'work-stations',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../work-stations/work-stations.module').then(
                x => x.WorkStationsPageModule
              )
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/profile/personal-info',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/profile/personal-info',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
