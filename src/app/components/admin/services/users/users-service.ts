import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {baseUrl, registerUrl, adminName, adminPass} from '../../../constants/constants'

import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  

  getAllUsers(): Observable<any> {
    return this.http.get(registerUrl, {
      headers: 
        new HttpHeaders({
          'Authorization': `Basic ${btoa(`${adminName}:${adminPass}`)}`,
          'Content-Type': 'application/json'
      })
    })
  }

  getUserbyId(id): Observable<any> {
    return this.http.get(registerUrl + '/' + id, {
      headers: 
        new HttpHeaders({
          'Authorization': `Basic ${btoa(`${adminName}:${adminPass}`)}`,
          'Content-Type': 'application/json'
      })
    })
  }

  deleteUser(id): Observable<any> {
    return this.http.delete(registerUrl + '/' + id, {
      headers: 
        new HttpHeaders({
          'Authorization': `Basic ${btoa(`${adminName}:${adminPass}`)}`,
          'Content-Type': 'application/json'
      })
    })
  }

 
}



