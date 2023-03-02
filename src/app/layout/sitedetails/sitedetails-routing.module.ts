import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitedetailsComponent } from './sitedetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'sites', pathMatch: 'full' },
  { path: 'sites', component: SitedetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SitedetailsRoutingModule { }
