import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  class!: string;

  ngOnInit() {
    this.class = "light-theme";
    const body=document.getElementsByTagName('body')[0];
    body.classList.add(this.class)
  }

  getTheme(event:any){
    const body=document.getElementsByTagName('body')[0];
    body.classList.remove(this.class)
    this.class=event.value
    body.classList.add(this.class)
  }
}
