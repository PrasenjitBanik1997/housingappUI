import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ShareModule } from '../share/share.module';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ShareModule
  ]
})
export class LayoutModule { }
