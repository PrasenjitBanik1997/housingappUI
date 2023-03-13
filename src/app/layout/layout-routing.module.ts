import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'site-details',
        pathMatch:"full"
      },
      {
        path: 'site-details',
        loadChildren: () => import('./sitedetails/sitedetails.module').then(m => m.SitedetailsModule)
      },
    ]
  },
  {
    path:'login',
    component:LoginComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
