import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  isError = false;
  isVisiable = false;
  passwordType: string = "password"

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<LoginComponent>) { }

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  userLogin() { }
  closeModal(bool: boolean) {
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

  openRegistrationModal(){
    this.dialogRef.close()
    const dialogRef = this.dialog.open(RegistrationComponent,{
      width: '40%',
      height: 'auto',
      disableClose: true,
      // data: this.bookedUserDetails,
    });
  }
}
