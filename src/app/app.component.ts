import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Sudip-Bio';
  bootstrapping = false;
  constructor(private ngxSpinnerService: NgxSpinnerService,
              private router: Router) {}

  ngOnInit(): void {
    this.ngxSpinnerService.show();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.bootstrapping === false) {
        this.ngxSpinnerService.hide();
        this.bootstrapping = true;
      }
    });
  }
}
