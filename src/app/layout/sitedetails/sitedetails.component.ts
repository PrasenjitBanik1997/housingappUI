import { Component, OnInit } from '@angular/core';
import { SitedetailsService } from 'src/app/share/service/sitedetails.service';

@Component({
  selector: 'app-sitedetails',
  templateUrl: './sitedetails.component.html',
  styleUrls: ['./sitedetails.component.scss']
})
export class SitedetailsComponent implements OnInit{

  //card=[1,2,3,4,5,6,7,8]

  siteDetails:any [] = [];
  


  constructor(private siteDetailsService: SitedetailsService) { }

  ngOnInit() {
    this.siteDetailsService.getSiteDetails().subscribe({
      next: (res)=>{this.siteDetails=res.data;
      console.log(res.data)
      },
      error: (e)=>console.log(e)
    })
  }

}
