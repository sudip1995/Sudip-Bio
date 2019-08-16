import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProfileConfig} from '../config/profile.config';
import {UserModel} from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {}

  authenticateUser(user: any): Observable<any> {
    return this.httpClient.post<any>(ProfileConfig.authenticateUserApi, user);
  }

  registerUser(user: UserModel): Observable<UserModel> {
    return this.httpClient.post<UserModel>(ProfileConfig.registerUserApi, user);
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }
}
