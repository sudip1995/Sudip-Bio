import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BlogModel} from '../models/profile.model';
import {Observable} from 'rxjs';
import {UserService} from './user.service';
import {AuthService} from '../../../core/components/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient,
              private authService: AuthService) {}

  getAllBlogPosts(url): Observable<BlogModel[]> {
    let headers: HttpHeaders = new HttpHeaders();
    const authToken = this.authService.loadToken();
    headers = headers.append('Authorization', authToken);
    return this.httpClient.get<BlogModel[]>(url, {headers});
  }

  saveBlogPost(url, data: any): Observable<BlogModel> {
    return this.httpClient.post<BlogModel>(url, data);
  }
}
