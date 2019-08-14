import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {BlogService} from '../../modules/profile/services/blog.service';
import {BlogModel} from '../../modules/profile/models/profile.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  textEditorForm: FormGroup;

  @Input() data: any;

  @Output() dataEmitted: EventEmitter<{ data: any }> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createTextEditorForm();
    this.textEditorForm.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
  }

  private createTextEditorForm() {
    this.textEditorForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['']
    });
  }

  private onFormValuesChanged() {
    this.dataEmitted.emit(this.textEditorForm.value);
  }
}

