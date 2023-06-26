import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperadminRoutingModule } from './superadmin-routing.module';
import { AllSitesComponent } from './all-sites/all-sites.component';
import { LayoutModule } from '../layout.module';
import { ShareModule } from 'src/app/share/share.module';
import { AllUsersComponent } from './all-users/all-users.component';
import { AddSitesComponent } from './add-sites/add-sites.component';
import { AddUsersComponent } from './add-users/add-users.component';



@NgModule({
  declarations: [
    AllSitesComponent,
    AllUsersComponent,
    AddSitesComponent,
    AddUsersComponent
  ],
  imports: [
    CommonModule,
    SuperadminRoutingModule,
    LayoutModule,
    ShareModule
  ]
})
export class SuperadminModule {
  
 }
