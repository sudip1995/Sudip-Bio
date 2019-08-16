import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SharedConfig} from '../../../shared/config/shared.config';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private httpClient: HttpClient) {}

  sendMail(data: any): Observable<any> {
    return this.httpClient.post<any>(SharedConfig.sendMailApi, data);
  }
}
