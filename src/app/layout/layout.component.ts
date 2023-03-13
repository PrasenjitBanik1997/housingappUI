import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  themeArray=[{key:'Light Theme',value:'light-theme',icon:'brightness_5'},{key:'Dark Theme',value:'dark-theme',icon:'brightness_2'}]
  themeClass!: string;

  constructor(private matDialog:MatDialog){}

  ngOnInit() {
    this.themeClass = "light-theme";
    const body=document.getElementsByTagName('body')[0];
    body.classList.add(this.themeClass)
  }

  getTheme(event:any){
    const body=document.getElementsByTagName('body')[0];
    body.classList.remove(this.themeClass)
    this.themeClass=event
    body.classList.add(this.themeClass)
  }
  
  
  openDialog(){
    this.matDialog.open(LoginComponent,{
      width:'30%', 
      //disableClose:true,
    })
  }
}
