import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { LoginRegistrationService } from 'src/app/share/service/login-registration.service';
import { RegistrationComponent } from '../registration/registration.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnChanges, OnInit ,AfterViewInit{
  hide = true;
  isError = false;
  isVisiable = false;
  passwordType: string = "password"
  selectedPage: string = "";

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    )]),
  });

  adminLoginDetails={
    email: "abc@gmail.com",
    password: "Abcd@1234"
  }

  constructor(
    private loginService: LoginRegistrationService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    console.log(this.route.paramMap)
    this.route.paramMap.subscribe( params => {
      console.log(params)
      this.selectedPage = params.get('data')as string;
    });
  }
  ngOnInit() {
    // this.selectedPage = this.route.snapshot.paramMap.get("data") as string
    console.log(this.selectedPage)
  }

  ngOnChanges() {
    console.log(this.selectedPage)
  }

  ngAfterViewInit() {
    this.selectedPage = this.route.snapshot.paramMap.get("data") as string
  }

  userLogin() {

    // console.log(this.loginForm.value)
    // this.loginService.userLogin(this.loginForm.value).subscribe({
    //   next: (resp) => {
    //     this.loginForm.reset();
    //     console.log(resp);
    //     sessionStorage.setItem('currentUser', JSON.stringify(resp));
    //   },
    //   error: (err) => { },
    // })
    if(this.loginForm.value.email==this.adminLoginDetails.email && this.loginForm.value.password==this.adminLoginDetails.password){
      this.router.navigate(['/home/superAdmin'])
    }
    else{
      console.log("Enter valid email id")
    }

  }
  // closeModal(bool: boolean) {
  //   this.dialogRef.close()
  // }

  showPassword() {
    this.isVisiable = !this.isVisiable;
    this.passwordType = "text";
  }

  hidePassword() {
    this.isVisiable = !this.isVisiable;
    this.passwordType = "password";
  }

  // openRegistrationModal() {
  //   this.dialogRef.close()
  //   const dialogRef = this.dialog.open(RegistrationComponent, {
  //     width: '40%',
  //     height: 'auto',
  //     disableClose: true,
  //     data: this.bookedUserDetails,
  //   });
  // }
}
