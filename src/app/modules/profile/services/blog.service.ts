import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BlogModel} from '../models/profile.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) {}

  getAllBlogPosts(url): Observable<BlogModel[]> {
    return this.httpClient.get<BlogModel[]>(url);
  }

  saveBlogPost(url, data: any): Observable<BlogModel> {
    return this.httpClient.post<BlogModel>(url, data);
  }
}
