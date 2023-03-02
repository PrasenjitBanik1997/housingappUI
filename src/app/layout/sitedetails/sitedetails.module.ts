import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitedetailsRoutingModule } from './sitedetails-routing.module';
import { SitedetailsComponent } from './sitedetails.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [SitedetailsComponent],
  imports: [
    CommonModule,
    SitedetailsRoutingModule,
    ShareModule
  ]
})
export class SitedetailsModule { }
