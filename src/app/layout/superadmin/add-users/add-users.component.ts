import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddSitesComponent } from '../add-sites/add-sites.component';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent {
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<AddSitesComponent>) { }

  addUsersForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone_no: new FormControl('', [Validators.required]),
    user_id: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  addUsers(){
    this.dialogRef.close(this.addUsersForm.value)
  }
  
  closeModal() {
    this.dialogRef.close()
  }
}
