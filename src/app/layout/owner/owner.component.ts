import { Component } from '@angular/core';
import { LoginRegistrationService } from 'src/app/share/service/login-registration.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent {
 constructor(private login:LoginRegistrationService){
  
 }
}
