import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  isWriting: boolean;
  data = '';
  blogs: any[] = [];
  constructor() { }

  ngOnInit() {
    this.isWriting = false;
  }

  cancel() {
    // ask user to save
    this.isWriting = false;
  }

  post() {
    // post blog to database
  }
}
