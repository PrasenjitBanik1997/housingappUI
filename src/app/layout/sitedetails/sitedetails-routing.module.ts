import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsaboutsiteComponent } from './detailsaboutsite/detailsaboutsite.component';
import { SitedetailsComponent } from './sitedetails.component';
import { SitesComponent } from './sites/sites.component';

const routes: Routes = [
  {
    path: '',
    component: SitedetailsComponent ,
    children: [
      {
        path: '',
        redirectTo: 'sites',
        pathMatch:"full"
      },
      {
        path: 'sites',
        component:SitesComponent,
      },
      {
        path: 'details-about-site',
        component:DetailsaboutsiteComponent
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SitedetailsRoutingModule { }
