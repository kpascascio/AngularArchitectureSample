import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { User } from '../../../shared/models/user';
import { HeadersService } from '../../../shared/services/headers.service';
import { baseURL } from '../../../../environments/environment.prod';
import { RegisterUser } from '../../../shared/models/auth/registerUser';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  jwtHelper = new JwtHelperService();
  decodedToken: any;  // NOTE: This decoded token will have role info in it.
  currentUser: User;
  userToken: any;

  constructor(private _http: HttpClient,
    private _router: Router,
    private _headers: HeadersService) {
  }

  register(registerUser: RegisterUser) {
    return this._http.post(`${baseURL}/auth/register`, registerUser);
  }

  forgotPassword(user) {
    return this._http.post(`${baseURL}/auth/forgotPassword`, user);
  }

  login(model: any) {
    return this._http.post(`${baseURL}/auth/login`, model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          localStorage.setItem('user', JSON.stringify(user.user));
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          this.currentUser = user.user;
          console.log(this.decodedToken);
        }
      })
    );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    const tokenPayload = this.jwtHelper.decodeToken(token);

    if (tokenPayload) {
      if (tokenPayload.role === 'User' && !this.jwtHelper.isTokenExpired(token)) {
        this._router.navigate(['apply']);
      }
    }
    return !this.jwtHelper.isTokenExpired(token);
  }

  isNotUser(): Boolean {
    const token = localStorage.getItem('token');
    const tokenPayload = this.jwtHelper.decodeToken(token);
    if (tokenPayload) {
      if (tokenPayload.role !== 'User') {
        return true;
      }
    }
    return false;
  }

  logout() {
    localStorage.clear();
    this._router.navigate(['/login']);
  }
}

