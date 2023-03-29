import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SitedetailsService {

  constructor(private http: HttpClient) { }

  getSiteDetails():Observable<any>{
    return this.http.get(`${environment.rootApiUrl}/api/getproject`)
  }

  
}
