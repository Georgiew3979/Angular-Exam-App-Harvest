import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {baseUrl, appKey, appSecret, adminName, adminPass} from '../../constants/constants'

@Injectable()
export class FieldsService {

  constructor(private http: HttpClient) { }

  getAllFields(): Observable<any> {
    return this.http.get(baseUrl + '/Fields', {
      headers: 
        new HttpHeaders({
        'Authorization': `Basic ${btoa(`${adminName}:${adminPass}`)}`,
        'Content-Type': 'application/json'
      })
    })
  }

  getFieldbyId(id): Observable<any> {
    return this.http.get(baseUrl + '/Fields/' + id, {
      headers: 
        new HttpHeaders({
          'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
          'Content-Type': 'application/json'
      })
    })
  }

  updateField(field): Observable<any> {
    return this.http.put(
      baseUrl + '/Fields/' + field._id,
      JSON.stringify(field),
      {
        headers: 
          new HttpHeaders({
            'Authorization': `Basic ${btoa(`${adminName}:${adminPass}`)}`,
            'Content-Type': 'application/json'
      })
    })
  }

  deleteField(id): Observable<any> {
    return this.http.delete(baseUrl + '/Fields/' + id, {
      headers: 
        new HttpHeaders({
          'Authorization': `Basic ${btoa(`${adminName}:${adminPass}`)}`,
          'Content-Type': 'application/json'
      })
    })
  }

  
}
