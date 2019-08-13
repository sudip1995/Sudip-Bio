import {Component, Input, OnInit} from '@angular/core';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  editor = ClassicEditor;
  config = {
    placeholder: 'Type the content here!'
  };

  @Input() data: string;

  constructor() { }

  ngOnInit() {
  }

}

