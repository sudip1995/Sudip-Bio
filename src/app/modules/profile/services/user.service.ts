import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProfileConfig} from '../config/profile.config';
import {UserModel} from '../models/profile.model';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient,
              private cookieService: CookieService) {}

  authenticateUser(user: any): Observable<any> {
    return this.httpClient.post<any>(ProfileConfig.authenticateUserApi, user);
  }

  registerUser(user: UserModel): Observable<any> {
    return this.httpClient.post<any>(ProfileConfig.registerUserApi, user);
  }

  storeUserData(token, user) {
    this.cookieService.set('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }
}
