import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { ILogin } from './login';

@Injectable()
export class LoginService {

  private readonly url = '/api/login';
  private _loginUrl = this.url;

  constructor(private _http: HttpClient) { }

  getUser(): Observable<ILogin> {
      return this._http.get<ILogin>(this._loginUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
      console.log(err.message);
      return Observable.throw(err.message);
  }
}
