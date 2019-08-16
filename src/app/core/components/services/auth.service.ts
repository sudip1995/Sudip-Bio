import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper = new JwtHelperService();

  constructor(private httpClient: HttpClient) {}

  loadToken(): string {
    return localStorage.getItem('id_token');
  }

  loadUserInfo(): any {
    return localStorage.getItem('user');
  }

  isLoggedIn() {
    return !this.jwtHelper.isTokenExpired(this.loadToken());
  }
}
