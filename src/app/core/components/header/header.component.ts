import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../modules/profile/services/user.service';
import {AuthService} from '../services/auth.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarOpen: boolean;

  constructor(private router: Router,
              public authService: AuthService,
              private cookieService: CookieService) { }

  ngOnInit() {
  }

  openMenu() {
    this.navbarOpen = !this.navbarOpen;
  }

  logout() {
    localStorage.clear();
    this.cookieService.deleteAll();
  }
}
