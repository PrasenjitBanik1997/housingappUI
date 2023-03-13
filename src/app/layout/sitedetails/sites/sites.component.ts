import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SitedetailsService } from 'src/app/share/service/sitedetails.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent {

  siteDetails: any[] = []

  constructor(
    private siteDetailsService: SitedetailsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.siteDetailsService.getSiteDetails().subscribe({
      next: (resp) => {
        this.siteDetails = resp.data;
      },
      error: (err) => { },
    })
  }

  gotoDetailsAboutsitePage(siteData:any) {
    this.router.navigate(["home/site-details/details-about-site",{data:JSON.stringify(siteData)}])
  }
}
