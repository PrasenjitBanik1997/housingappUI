import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{

  @Input() isExpanded: boolean=false;
  // @Output() toggleMenu = new EventEmitter();

  public routeLinks = [
    { link: "about", name: "All Sites", icon: "dashboard",routingPath:'/home/superAdmin/allSites'},
    { link: "locations", name: "All User", icon: "account_balance",routingPath:'/home/superAdmin/allUsers'},
  ];

  ngOnInit(){
    console.log(this.isExpanded)
  }

}
