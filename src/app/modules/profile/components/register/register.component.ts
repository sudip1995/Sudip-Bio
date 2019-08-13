import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  registrationFormErrors: any;
  constructor(private formBuilder: FormBuilder) {
    this.registrationFormErrors = {
      firstName: {},
      lastName: {},
      address: {},
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

  }

  private createRegistrationForm() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
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
      console.log(control);
      if (control && control.dirty && !control.valid) {
        this.registrationFormErrors[field] = control.errors;
      }
    }
  }
}
