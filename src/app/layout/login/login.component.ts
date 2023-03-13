import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm= new FormGroup({
   email:new FormControl('', [Validators.required, Validators.email]),
   password: new FormControl('',[Validators.required, Validators.minLength(6)]) 
  })

  login(){
    console.warn(this.loginForm.value);
  }

  get emailValidator(){
    return this.loginForm.get('email')
  }
  
  get passwordValidator(){
    return this.loginForm.get('password')
  }

show: boolean = false;

constructor() {
}
password() {
    this.show = !this.show;
}
}
