import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  hide = true;
  isError = false;
  isVisiable = false;
  passwordType: string = "password"
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<RegistrationComponent>) { }

  registrationForm = new FormGroup({
    first_name: new FormControl("prasen", [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [ Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ]),
    mobile_no: new FormControl('',[Validators.required, Validators.minLength(10)]),
    password: new FormControl('',[Validators.required, Validators.minLength(6),Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    )]),
  });


  userResistration() { }
  closeModal() {
    this.dialogRef.close()
  }

  showPassword() {
    this.isVisiable = !this.isVisiable;
    this.passwordType = "text";
  }

  hidePassword() {
    this.isVisiable = !this.isVisiable;
    this.passwordType = "password";
  }

  onValueChange(event:any){
    console.log(event.target.vale)
  }
}
