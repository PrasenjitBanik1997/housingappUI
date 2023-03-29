import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSitesComponent } from './all-sites/all-sites.component';
import { SuperAdminComponent } from './super-admin.component';

const routes: Routes = [
  {
    path: '',
    component:SuperAdminComponent,
    children:[
      {
        path: '',
        redirectTo: 'allSites',
        pathMatch:"full"
      },
      
      {
        path: 'allSites',
        component:AllSitesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
