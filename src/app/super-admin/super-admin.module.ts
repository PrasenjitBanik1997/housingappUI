import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { AllSitesComponent } from './all-sites/all-sites.component';
import { SidenavComponent } from '../layout/sidenav/sidenav.component';
import { ShareModule } from '../share/share.module';
// import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AllSitesComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    ShareModule,
    // LayoutModule
    
  ],
})
export class SuperAdminModule {

 }
