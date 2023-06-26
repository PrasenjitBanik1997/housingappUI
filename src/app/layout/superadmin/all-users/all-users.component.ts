import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUsersComponent } from '../add-users/add-users.component';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface userData {
  name: string;
  phone_no: number;
  user_id: string;
  password: string;
}




@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements AfterViewInit{
  ELEMENT_DATA: userData[] = [
    {name:'Rohit Das', phone_no:1234567890, user_id:'rohit@gmail.com', password: 'rohit@123'},
    {name:'Aditi Kundu', phone_no:1234561234, user_id:'aditi@gmail.com', password: 'aditi@123'},
    {name:'Mohon Roy', phone_no:9876567890, user_id:'mohon@gmail.com', password: 'mohon@123'},
    {name:'Suravi Dey', phone_no:1234432590, user_id:'suravi@gmail.com', password: 'suravi@123'},
    {name:'Tanmoy Saha', phone_no:8634567890, user_id:'tanmoy@gmail.com', password: 'tanmoy@123'},
  ];
  displayedColumns: string[] = ['name', 'phone_no', 'user_id', 'password'];
  dataSource = new MatTableDataSource<userData>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  

  constructor(private matDialog:MatDialog){
  
  }

  ngOnInit(){
    
  }

  openDialog(){
    this.matDialog.open(  AddUsersComponent,{
      width: '40%',
      height: 'auto',
    }).afterClosed().subscribe(result => {
      this.ELEMENT_DATA.unshift(result)
      this.dataSource = new MatTableDataSource<userData>(this.ELEMENT_DATA);
    });
  }
}
