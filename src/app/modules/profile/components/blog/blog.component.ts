import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  editor = ClassicEditor;
  config = {
    placeholder: 'Type the content here!'
  };
  data = '';

  constructor() { }

  ngOnInit() {
  }

}
