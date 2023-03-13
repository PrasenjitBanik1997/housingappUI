import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ShareModule } from '../share/share.module';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RegistrationComponent } from './registration/registration.component';




@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    SidenavComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ShareModule
  ]
})
export class LayoutModule { }
