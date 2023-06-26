import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ShareModule } from '../share/share.module';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RegistrationComponent } from './registration/registration.component';
import { SiteEnquiryComponent } from './dialogsComponent/site-enquiry/site-enquiry.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { OwnerComponent } from './owner/owner.component';



@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    SidenavComponent,
    RegistrationComponent,
    SiteEnquiryComponent,
    SuperadminComponent,
    OwnerComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ShareModule,
  ],
  exports:[
    SidenavComponent
  ]
})
export class LayoutModule {

 }
