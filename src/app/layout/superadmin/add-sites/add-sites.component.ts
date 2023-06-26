import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-sites',
  templateUrl: './add-sites.component.html',
  styleUrls: ['./add-sites.component.scss']
})
export class AddSitesComponent {
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<AddSitesComponent>) { }

  addSitesForm = new FormGroup({
    project_name: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    price_starting_from: new FormControl('', [Validators.required]),
    no_of_floor: new FormControl('', [Validators.required]),
    project_area: new FormControl('', [Validators.required]),

  })

addSites(){
  this.dialogRef.close(this.addSitesForm.value)
}

closeModal() {
  this.dialogRef.close()
}

}
