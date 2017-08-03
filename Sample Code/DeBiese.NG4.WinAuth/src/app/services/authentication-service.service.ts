import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getUser(): Observable<string> {
    console.log('Calling getUser');
    let serviceUrl: string = `${environment.serviceBaseUrl}auth/getuser`;
    return this.http.get(serviceUrl, {responseType: 'text'})
      .map((rslt: string) =>{
        return rslt;
      });
  }

}
