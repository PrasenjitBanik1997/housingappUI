import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginRegistrationService } from 'src/app/share/service/login-registration.service';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.scss']
})
export class SuperadminComponent implements OnInit,OnDestroy {
  public isExpanded = false;

  constructor(private login:LoginRegistrationService){
     
  }

  ngOnInit():void {
    this.login.myAppSubject.subscribe(res=>{
      this.isExpanded=res
    });
  }
  
  ngOnDestroy(){
    // this.login.myApp.next(false);
  }
}
