import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestService } from './rest.service';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  static loggedIn: EventEmitter<any> = new EventEmitter();

  public isLoggedIn: boolean = false;
  public isRegister: boolean = false;
  public isSaveTimesheet: boolean = false;
  public isAdmin: any;
  public loginTimestamp: any;
  public url: any;
  public headers: any;
  public sessionTimeout: any = false;

  constructor(private rest: RestService) {
  }

  
  
//   setsessionvalue(data: any) {
//     localStorage.setItem('isLoggedIn', 'true');
//     localStorage.setItem('accesstoken', data.accesstoken);
//     localStorage.setItem('userId', data.user.id);
//     localStorage.setItem('userRoleId', data.user.userRoleId);
//     localStorage.setItem('organizationId', data.user.organizationId);
//     localStorage.setItem('userName', data.user.userName);

//   }    

  setHeaders() {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  setAuthHeaders() {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic ' + btoa('' + ':' + ''));
  }

  login(user: any): Observable<any> {
    this.url = '/loginPremiumUser';
    this.setHeaders();
    return this.rest.post(this.url, user, { headers: this.headers })
      .map((data) => {
        let isLoggedIn: any;
        if (data.accesstoken != undefined)
          isLoggedIn = true;//
        this.isLoggedIn = true;
        AuthService.loggedIn.emit(isLoggedIn);
        return data;
      });
  }

}