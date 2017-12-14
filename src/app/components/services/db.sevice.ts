import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {baseUrl, appKey, appSecret} from '../../components/constants/constants'
// Models

import { FieldModel	 } from '../farming/models/fileld.model';
import { CultureModel } from '../farming/models/culture.model';


@Injectable()
export class DataBaseService {
  
  constructor(
    private http : HttpClient
  ) { }


  registerField(registerModel : FieldModel) : Observable<Object> {
    return this.http.post(
      baseUrl + '/Fields', 
      JSON.stringify(registerModel),
      { 
        headers: this.createAuthHeaders('Kinvey')
      }
    )
  }

  registerCulture(registerModel : CultureModel) : Observable<Object> {
    return this.http.post(
      baseUrl + '/Cultures', 
      JSON.stringify(registerModel),
      { 
        headers: this.createAuthHeaders('Kinvey')
      }
    )
  }



  private createAuthHeaders(type : string) : HttpHeaders {
    if (type === 'Basic') {
      return new HttpHeaders({
        'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
        'Content-Type': 'application/json'
      })
    } else {
      return new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      })
    }
  }
}