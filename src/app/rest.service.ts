import { Injectable } from '@angular/core';
import {
  Http, Response, RequestOptions, Headers, 
  RequestOptionsArgs, Request, RequestMethod } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class RestService {

  public baseurl:string ="http://192.168.0.112:8080"; //base url of the tomcat server

  constructor(
    private http: Http){}
  
  // Response handling
  private handleResponse(res: any){
    let json = res.json();
    let status ={
     'code' : res.status || {},
     'success' : res.ok
    } 
    let data = JSON.parse(res._body);
    if(!!status.success === false){
      return Observable.throw('Error');
    }
    return data;
  }

  // Error Handling
  private handleError(error: any){
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      if(error.status == 401)
      {
        localStorage.clear();
        return Observable.throw(error.status);
      }
    return Observable.throw(errMsg);
  }

  // Request Handling
  request(url: string|Request, options?: RequestOptionsArgs) : Observable<any>{
    url = this.baseurl + url;
    options = options || new RequestOptions();
    options.headers = options.headers || new Headers();
    if(!options.headers.has('Content-Type')){
      options.headers.append('Content-Type', 'application/json');
    }
    
    return this.http.request(url, options)
      .map(this.handleResponse)
      .catch(this.handleError);
  }

  // Get method call
  get(url: string, options?: RequestOptionsArgs) : Observable<any>{
    return this.request(url, options);
  }

  // Post method call
  post(url: string, body: any, options?: RequestOptionsArgs) : Observable<any>{
    options = options || new RequestOptions();
    options.body = body;
    options.method = RequestMethod.Post;
    return this.request(url, options);
  }

  postFile(url: string, formData: any) : Observable<any>{
    url = this.baseurl + url;
    return this.http.post(url,formData);
  }

  // Put method call
  put(url: string, body: any, options?: RequestOptionsArgs) : Observable<any>{
    options = options || new RequestOptions();
    options.body = body;
    options.method = RequestMethod.Put;
    return this.request(url, options);
  }

  delete(url: string, options?: RequestOptionsArgs) : Observable<any>{
    options = options || new RequestOptions();
    options.method = RequestMethod.Delete;

    return this.request(url, options);
  }
}
