import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginRegistrationService } from 'src/app/share/service/login-registration.service';


@Component({
  selector: 'app-site-enquiry',
  templateUrl: './site-enquiry.component.html',
  styleUrls: ['./site-enquiry.component.scss']
})
export class SiteEnquiryComponent implements OnInit{

  token= JSON.parse(sessionStorage.getItem('currentUser') as string);
  isLoggedin:any;
  bhkDetails:any[]=[];
  enquiryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email_id: new FormControl('', [ Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ]),
    phone_no: new FormControl('',[Validators.required, Validators.minLength(10)]),
    budget: new FormControl('', [Validators.required]),
    status: new FormControl('open'),
    BHK: new FormControl('',[Validators.required]),
    query: new FormControl(''),
  });

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<SiteEnquiryComponent>, 
    private enquiryService: LoginRegistrationService, @Inject(MAT_DIALOG_DATA) public data: any ) { }
  

  ngOnInit(){
   this.bhkDetails=this.data.BHK_configuration.split(",").map((element:any)=>element+'BHK')
  //  console.log(this.bhkDetails)
    console.log(this.token)
  if((this.token!==null)&&(this.token.hasOwnProperty('accessToken')==true)){
    this.isLoggedin=true
  }else if((this.token==null)||(this.token.hasOwnProperty('accessToken')==false)){
    this.isLoggedin=false
  }

  
  }

  bhk(value:any){
    console.log(value)
  }

  userResistration() { }
  closeModal() {
    this.dialogRef.close()
  }

  userEnquiry() { 
    this.enquiryForm.patchValue({

    })
    console.log(this.enquiryForm.value)
    this.enquiryService.siteEnquiry(this.enquiryForm.value).subscribe({
      next: (resp) => {
        this.enquiryForm.reset();
        console.log(resp);
        sessionStorage.setItem('currentUser', JSON.stringify(resp));
      },
      error: (err) => { },
    })

  }

 
  
 
}
