import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

import * as models from '../models/';

@Injectable()
export class DataServiceService {

  constructor(
    private http: HttpClient
  ) { }

  save(data: models.IPostDataModel): Observable<string> {
    console.log('Calling getUser');
    let serviceUrl: string = `${environment.serviceBaseUrl}data/save`;

    return this.http.post(serviceUrl, data, {responseType: 'text'})
      .map((rslt: string) => {
        return rslt;
      });
  }

}
