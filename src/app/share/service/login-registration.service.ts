import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginRegistrationService {

  constructor(private http: HttpClient) { }

  token= JSON.parse(sessionStorage.getItem('currentUser') as string) ;

  userLogin(userData:any):Observable<any>{
    return this.http.post(`${environment.rootApiUrl}/users/loginuser`, userData)
  }

  userRegistration(userData:any):Observable<any>{
    return this.http.post(`${environment.rootApiUrl}/users/registeruser`, userData)
  }

  getEnquiryDetails():Observable<any>{
    console.log(this.token)
    return this.http.get(`${environment.rootApiUrl}/api/getenquiry`,{headers: { Authorization: `bearer ${this.token.accessToken?this.token.accessToken:""}`}})
  }

  siteEnquiry(userData:any):Observable<any>{
    return this.http.post(`${environment.rootApiUrl}/api/postenquiry`, userData)
  }
}
