import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MailService} from '../../services/mail.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  contactFormErrors: any;
  constructor(private formBuilder: FormBuilder,
              private mailService: MailService,
              private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.createContactForm();
  }

  private createContactForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  sendMessage() {
    this.mailService.sendMail(this.contactForm.value).subscribe(res => {
      console.log(res);
      if (res && res.success) {
        this.snackBar.open('Message Sent!', 'Dismiss',  {
          duration: 2000
        });
        this.contactForm.reset();
      }
    });
  }
}

