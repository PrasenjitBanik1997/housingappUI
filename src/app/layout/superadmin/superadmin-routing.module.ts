import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSitesComponent } from './all-sites/all-sites.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { SuperadminComponent } from './superadmin.component';

const routes: Routes = [
  {
    path: '',
    component:SuperadminComponent,
    children:[
      {
        path: '',
        redirectTo: 'allSites',
        pathMatch:"full"
      },
      
      {
        path: 'allSites',
        component:AllSitesComponent
      },

      {
        path: 'allUsers',
        component:AllUsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
