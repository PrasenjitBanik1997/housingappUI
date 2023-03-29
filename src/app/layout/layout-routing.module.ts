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

      {
        path: 'customerLogin',
        component:LoginComponent
      },
    
      {
        path: 'adminLogin',
        component:LoginComponent
      },

      {
        path:'superAdmin',
        // component:SuperAdminComponent
        loadChildren: () => import('./superadmin/superadmin.module').then(m => m.SuperadminModule)
      }
     
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
