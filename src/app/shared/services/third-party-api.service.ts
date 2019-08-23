import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ThirdPartyApiConfig} from '../config/third-party-api.config';

@Injectable({
  providedIn: 'root'
})
export class ThirdPartyApiService {

  constructor(private httpClient: HttpClient) { }

  getGithubUserRepos(username: string): Observable<any> {
    return this.httpClient.get(ThirdPartyApiConfig.getGithubUserReposApi(username));
  }
}
