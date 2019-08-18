import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../../models/profile.model';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  registrationFormErrors: any;
  showAlert: boolean;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {
    this.registrationFormErrors = {
      firstName: {},
      lastName: {},
      email: {},
      password: {},
      gender: {},
      dateOfBirth: {}
    };
  }

  ngOnInit() {
    this.createRegistrationForm();
    this.registrationForm.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
  }

  register() {
    const user = new UserModel();
    user.firstName = this.registrationForm.get('firstName').value;
    user.lastName = this.registrationForm.get('lastName').value;
    user.email = this.registrationForm.get('email').value;
    user.password = this.registrationForm.get('password').value;
    user.gender = this.registrationForm.get('gender').value;
    user.dateOfBirth = this.registrationForm.get('dateOfBirth').value;
    this.userService.registerUser(user).subscribe(res => {
      if (res && res.success) {
        this.showAlert = false;
        this.router.navigateByUrl('/login');
      } else {
        this.showAlert = true;
        this.router.navigateByUrl('/register');
      }
    });
  }

  private createRegistrationForm() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,13}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password: ['', Validators.required]
    });
  }

  private onFormValuesChanged() {
    for (const field in this.registrationFormErrors) {
      if (!this.registrationFormErrors.hasOwnProperty(field)) {
        continue;
      }

      this.registrationFormErrors[field] = {};
      const control = this.registrationForm.get(field);
      if (control && control.dirty && !control.valid) {
        this.registrationFormErrors[field] = control.errors;
      }
    }
  }
}
