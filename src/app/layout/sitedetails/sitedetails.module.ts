import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitedetailsRoutingModule } from './sitedetails-routing.module';
import { SitedetailsComponent } from './sitedetails.component';
import { ShareModule } from 'src/app/share/share.module';
import { SitesComponent } from './sites/sites.component';
import { DetailsaboutsiteComponent } from './detailsaboutsite/detailsaboutsite.component';


@NgModule({
  declarations: [SitedetailsComponent, SitesComponent, DetailsaboutsiteComponent],
  imports: [
    CommonModule,
    SitedetailsRoutingModule,
    ShareModule,
    
  ]
})
export class SitedetailsModule { }
