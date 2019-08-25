import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../../core/components/services/auth.service';
import {ContentModel} from '../models/shared.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private httpClient: HttpClient,
              private authService: AuthService) {}

  getAllContent(url): Observable<ContentModel[]> {
    let headers: HttpHeaders = new HttpHeaders();
    const authToken = this.authService.loadToken();
    headers = headers.append('Authorization', authToken);
    return this.httpClient.get<ContentModel[]>(url, {headers});
  }

  getContentById(url): Observable<ContentModel> {
    let headers: HttpHeaders = new HttpHeaders();
    const authToken = this.authService.loadToken();
    headers = headers.append('Authorization', authToken);
    return this.httpClient.get<ContentModel>(url, {headers});
  }

  saveContent(url, data: any): Observable<ContentModel> {
    let headers: HttpHeaders = new HttpHeaders();
    const authToken = this.authService.loadToken();
    headers = headers.append('Authorization', authToken);
    return this.httpClient.post<ContentModel>(url, data, {headers});
  }
}
