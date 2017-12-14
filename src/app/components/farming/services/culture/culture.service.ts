import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {baseUrl, appKey, appSecret, adminName, adminPass, registerUrl} from '../../../constants/constants'

import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'

@Injectable()
export class CultureService {

  constructor(private http: HttpClient) { }

  searchCulture(payload: Observable<string>) {
    return payload.debounceTime(1000)
      .distinctUntilChanged()
      .switchMap(x => (
        this.getSearchedCulture(x)
      ))
  }

  getSearchedCulture(str): Observable<any> {
    return this.http.get(baseUrl + `/Cultures?query={"name":{"$regex": "^.*${str.toLowerCase()}"}}`, {
      headers: 
        new HttpHeaders({
          'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
          'Content-Type': 'application/json'
      })
    })
  }

  getCulturebyId(id): Observable<any> {
    return this.http.get(baseUrl + '/Cultures/' + id, {
      headers: 
        new HttpHeaders({
          'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
          'Content-Type': 'application/json'
      })
    })
  }

  getAllCulture(): Observable<any> {
    return this.http.get(baseUrl + '/Cultures', {
      headers: 
        new HttpHeaders({
          'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
          'Content-Type': 'application/json'
      })
    })
  }

  deleteCulture(id): Observable<any> {
    return this.http.delete(baseUrl + '/Cultures/' + id, {
      headers: 
        new HttpHeaders({
          'Authorization': `Basic ${btoa(`${adminName}:${adminPass}`)}`,
          'Content-Type': 'application/json'
      })
    })
  }

  updateCulture(cultureId, culture ) : Observable<Object> {
    return this.http.put(
      baseUrl + '/Cultures/' + cultureId , 
      JSON.stringify(culture),
      { 
        headers: new HttpHeaders({
          'Authorization': `Basic ${btoa(`${adminName}:${adminPass}`)}`,
          'Content-Type': 'application/json'
        })
      }
    )
  }
}



