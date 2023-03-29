import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { LoginRegistrationService } from 'src/app/share/service/login-registration.service';
import { SiteEnquiryComponent } from '../../dialogsComponent/site-enquiry/site-enquiry.component';

@Component({
  selector: 'app-detailsaboutsite',
  templateUrl: './detailsaboutsite.component.html',
  styleUrls: ['./detailsaboutsite.component.scss']
})
export class DetailsaboutsiteComponent implements OnInit {

  visitedSiteDetails:any;
  constructor(private route: ActivatedRoute, public dialog: MatDialog, private enquiryService: LoginRegistrationService ){}

  ngOnInit(){
    this.visitedSiteDetails=JSON.parse(this.route.snapshot.paramMap.get("data") as string)

    this.enquiryService.getEnquiryDetails().subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (err) => { },
    })

  }
  enquiry(){
      const dialogRef = this.dialog.open(SiteEnquiryComponent,{
        width: '40%',
        height: 'auto',
        disableClose: true,
        data: this.visitedSiteDetails,
      });

  }
}

