import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SiteEnquiryComponent } from './dialogsComponent/site-enquiry/site-enquiry.component';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';
import { LoginRegistrationService } from '../share/service/login-registration.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  themeArray=[{key:'Light Theme',value:'light-theme',icon:'brightness_5'},{key:'Dark Theme',value:'dark-theme',icon:'brightness_2'}]
  themeClass!: string;
  public isExpanded = false;
   public myApp:boolean = false; 
  

  constructor(private router:Router,
    private login:LoginRegistrationService){

  }


  ngOnInit() {
    this.themeClass = "light-theme";
    const body=document.getElementsByTagName('body')[0];
    body.classList.add(this.themeClass)

    this.login.enableMenuButton.subscribe(res=>{
      this.myApp= res
    }
    )
  }

  getTheme(event:any){
    const body=document.getElementsByTagName('body')[0];
    body.classList.remove(this.themeClass)
    this.themeClass=event
    body.classList.add(this.themeClass)
  }

  // openLoginDialog(){
  //   const dialogRef = this.dialog.open(LoginComponent,{
  //     width: '30%',
  //     height: 'auto',
  //     disableClose: true,
  //     // data: this.bookedUserDetails,
  //   });
    
  // }
  goToPage(selectedPage:string){
    this.router.navigate(['/home/adminLogin',{data:selectedPage}])
  }

  
  

  

  public toggleMenu() {
    this.login.myAppSubject.next(this.isExpanded=!this.isExpanded)
  }
}
