import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SitedetailsService } from 'src/app/share/service/sitedetails.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddSitesComponent } from '../add-sites/add-sites.component';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface siteData {
  project_name: string;
  location: string;
  price_starting_from: string;
  no_of_floor: number;
  project_area: number;
  status: string;
}



@Component({
  selector: 'app-all-sites',
  templateUrl: './all-sites.component.html',
  styleUrls: ['./all-sites.component.scss']
})
// export class AllSitesComponent implements OnInit {

//   dataSource!: MatTableDataSource<any>;
//   displayedColumns: string[] = ['project_name','location','price_starting_from','no_of_floor','project_area']

//   @ViewChild('paginator') paginator!: MatPaginator;

//   constructor(private siteDetailsService: SitedetailsService,
//     private matDialog:MatDialog) {}

//   ngOnInit(): void {
//     this.siteDetailsService.getSiteDetails().subscribe({
//       next: (resp) => {
//         // this.dataSource = resp.data;
//         this.dataSource=new MatTableDataSource(resp.data)
//         this.dataSource.paginator=this.paginator
//         console.log(this.dataSource)
//       }
//     })
//   }
  

//   openDialog(){
//     this.matDialog.open(AddSitesComponent,{
//       width: '40%',
//       height: 'auto',
//     });
//   }   
// }

export class AllSitesComponent implements AfterViewInit{
  ELEMENT_DATA: siteData[] = [
    {project_name:'Udayan', location:'Kolkata', price_starting_from:'45 L', no_of_floor:10, project_area:2.1, status:'completed'},
    {project_name:'Ulhas', location:'Barddhaman', price_starting_from:'28 L', no_of_floor:8, project_area:1.8, status:'completed'},
    {project_name:'Urvashi', location:'Durgapur', price_starting_from:'35 L', no_of_floor:10, project_area:2.3, status:'completed'},
    {project_name:'Utsa', location:'Newtown Kolkata', price_starting_from:'42 L', no_of_floor:12, project_area:3, status:'completed'},
    {project_name:'Uttorayon', location:'Siliguri', price_starting_from:'45 L', no_of_floor:7, project_area:2.5, status:'completed'},
    {project_name:'Upoban', location:'Santiniketan', price_starting_from:'25 L', no_of_floor:0, project_area:2.8, status:'ongiong'},
    {project_name:'Ujjwala', location:'Tollygunge Kolkata', price_starting_from:'42 L', no_of_floor:0, project_area:3.2, status:'ongoing'},
    {project_name:'Utalika', location:'Dumdum Kolkata', price_starting_from:'52 L', no_of_floor:0, project_area:2.2, status:'upcoming'},
    {project_name:'Upohar', location:'EM Bypass Kolkata', price_starting_from:'55 L', no_of_floor:0, project_area:2.7, status:'ongoing'},
  ];
  displayedColumns: string[] = ['project_name', 'location', 'price_starting_from','no_of_floor','project_area','status'];
  dataSource = new MatTableDataSource<siteData>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  

  constructor(private matDialog:MatDialog){
  
  }

  ngOnInit(){
    
  }

  openDialog(){
    this.matDialog.open(AddSitesComponent,{
      width: '40%',
      height: 'auto',
    }).afterClosed().subscribe(result => {
      this.ELEMENT_DATA.unshift(result)
      this.dataSource = new MatTableDataSource<siteData>(this.ELEMENT_DATA);
    });
  }
}
