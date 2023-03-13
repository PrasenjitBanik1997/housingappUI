import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailsaboutsite',
  templateUrl: './detailsaboutsite.component.html',
  styleUrls: ['./detailsaboutsite.component.scss']
})
export class DetailsaboutsiteComponent implements OnInit {

  visitedSiteDetails:any;
  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.visitedSiteDetails=JSON.parse(this.route.snapshot.paramMap.get("data") as string)
  }

}
