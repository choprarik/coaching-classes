import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { ILogin } from './login';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  pageTitle = 'Login';

  _uname: string;
  get uname(): string {
    return this._uname;
  }
  set uname(value: string) {
    this._uname = value;
  }

  _pwd: string;
  get pwd(): string {
    return this._pwd;
  }
  set pwd(value: string) {
    this._pwd = value;
  }

  loginVal: ILogin;
  errorMessage: string;

  constructor(private _loginService: LoginService, private _router: Router, private _http: HttpClient) {}

  hitLogin(): void {
    console.log('user: ' + this._uname + ', password: ' + this._pwd);
    if (location.href.includes('localhost:4200')) {
      this._http.get('api/login/login.json').subscribe(user => {
        this.loginVal = <any>user;
        if (this._uname === this.loginVal.user && this.loginVal.password === this._pwd) {
          console.log('Success');
          this._router.navigate(['/students']);
        } else {
          console.log('Failure');
        }
      }, error => this.errorMessage = <any>error);
    }else{
      this._loginService.getUser()
          .subscribe(user => {
              this.loginVal = user;
              if (this._uname === this.loginVal.user && this.loginVal.password === this._pwd) {
                console.log('Success');
                this._router.navigate(['/students']);
              } else {
                console.log('Failure');
              }
          },
              error => this.errorMessage = <any>error);
    }
  }
}
