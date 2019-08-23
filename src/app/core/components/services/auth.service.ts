import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import {CookieService} from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper = new JwtHelperService();

  constructor(private httpClient: HttpClient,
              private cookieService: CookieService) {}

  loadToken(): string {
    return this.cookieService.get('id_token');
  }

  loadUserInfo(): any {
    return this.cookieService.get('user');
  }

  isLoggedIn() {
    return !this.jwtHelper.isTokenExpired(this.loadToken());
  }
}
