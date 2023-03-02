import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  themeArray=[{key:'Light Theme',value:'light-theme',icon:'brightness_5'},{key:'Dark Theme',value:'dark-theme',icon:'brightness_2'}]
  themeClass!: string;

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
}
