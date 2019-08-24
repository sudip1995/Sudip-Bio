import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {UserService} from '../modules/profile/services/user.service';
import {AuthService} from './components/services/auth.service';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router,
              private snackBar: MatSnackBar) {}

  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.snackBar.open('Log In as a user to see this page', 'Dismiss',  {
        duration: 2000
      });
      this.router.navigate(['/login']);
      return false;
    }
  }
}
