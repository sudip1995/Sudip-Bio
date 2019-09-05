import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginFormErrors: any;
  showAlert: boolean;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private ngxSpinnerService: NgxSpinnerService) {
    this.loginFormErrors = {
      email: {},
      password: {}
    };
  }

  ngOnInit() {
    this.createLoginForm();
    this.loginForm.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
  }

  private createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,13}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password: ['', Validators.required]
    });
  }

  login() {
    this.ngxSpinnerService.show();
    this.userService.authenticateUser(this.loginForm.value).subscribe(res => {
      this.ngxSpinnerService.hide();
      if (res && res.success) {
        this.showAlert = false;
        this.userService.storeUserData(res.token, res.user);
        this.router.navigateByUrl('/home');
      } else {
        this.showAlert = true;
        this.router.navigateByUrl('/login');
      }
    });
  }

  private onFormValuesChanged() {
    for (const field in this.loginFormErrors) {
      if (!this.loginFormErrors.hasOwnProperty(field)) {
        continue;
      }

      this.loginFormErrors[field] = {};
      const control = this.loginForm.get(field);
      if (control && control.dirty && !control.valid) {
        this.loginFormErrors[field] = control.errors;
      }
    }
  }
}
