import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SitedetailsService } from 'src/app/share/service/sitedetails.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit{

  siteDetails: any[] = []

  constructor (
    private siteDetailsService: SitedetailsService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.siteDetailsService.getSiteDetails().subscribe({
      next: (resp) => {
        this.siteDetails = resp.data;
        setTimeout(() => {
          this.spinner.hide();
        }, 2000);
      },
      error: (err) => { },
    })
  }

  gotoDetailsAboutsitePage(siteData:any) {
    this.router.navigate(["home/site-details/details-about-site",{data:JSON.stringify(siteData)}])
  }
}
