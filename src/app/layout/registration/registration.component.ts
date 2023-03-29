import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginRegistrationService } from 'src/app/share/service/login-registration.service';

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
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<RegistrationComponent>,private registrationService: LoginRegistrationService) { }

  registrationForm = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [ Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ]),
    mob_no: new FormControl('',[Validators.required, Validators.minLength(10)]),
    password: new FormControl('',[Validators.required, Validators.minLength(8),Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    )]),
    role: new FormControl(''),
  });


  userResistration() { 
    this.registrationForm.patchValue({
      role:'103'
    })
    console.log(this.registrationForm.value)
    this.registrationService.userRegistration(this.registrationForm.value).subscribe(element=>{this.registrationForm.reset()})
  }
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
