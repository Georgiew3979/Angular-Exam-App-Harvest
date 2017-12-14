import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// Models
import { RegisterModel } from './models/register.model';
import { LoginModel } from './models/login.model';


import { appKey, appSecret, loginUrl, logoutUrl, registerUrl, adminRoleId, workerRoleId, adminName, adminPass } from '../../components/constants/constants'

@Injectable()
export class AuthenticationService {
  private currentAuthtoken : string;
  private rolesToken: string

  constructor(
    private http : HttpClient
  ) { }

  login(loginModel : LoginModel) {
    return this.http.post(
      loginUrl,
      JSON.stringify(loginModel),
      {
        headers: this.createAuthHeaders('Basic')
      }
    )
  }

  register(registerModel : RegisterModel) : Observable<Object> {
    return this.http.post(
      registerUrl, 
      JSON.stringify(registerModel),
      { 
        headers: this.createAuthHeaders('Basic')
      }
    )
  }

  grantRole(userId, RoleId ) : Observable<Object> {
    return this.http.put(
      registerUrl + '/' + userId + '/roles/' + RoleId, 
      {},
      { 
        headers: new HttpHeaders({
          'Authorization': `Basic ${btoa(`${adminName}:${adminPass}`)}`,
          'Content-Type': 'application/json'
        })
      }
    )
  }

  logout() {
    return this.http.post(
      logoutUrl,
      {},
      {
        headers: this.createAuthHeaders('Kinvey')
      }
    )
  }

  isLoggedIn() {
    let authtoken : string = localStorage.getItem('authtoken');

    return authtoken === this.currentAuthtoken;
  }

  isUserAdmin() {  
    return adminRoleId === localStorage.getItem('roleUser')
  }

  isUserWorker() {  
    return workerRoleId === localStorage.getItem('roleUser')
  }

  get authtoken() {
    return this.currentAuthtoken;
  }

  set authtoken(value : string) {
    this.currentAuthtoken = value;
  }

  get roletoken() {
    return this.rolesToken;
  }

  set roletoken(value : string) {
    this.rolesToken = value;
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