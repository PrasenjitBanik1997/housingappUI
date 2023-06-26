import { Component } from '@angular/core';

@Component({
  selector: 'app-owner-property',
  templateUrl: './owner-property.component.html',
  styleUrls: ['./owner-property.component.scss']
})
export class OwnerPropertyComponent {
  buildingDetails = [{
    img1: "../../../../assets/icons/building1.jpg", details1: {
      status: "completed", bhk: "3BHK"}
    },

    {
      img2: "../../../../assets/icons/building2.jpg", details2: {
        status: "completed", bhk: "2BHK"}
      }
  ]
}