import {Component, OnDestroy, OnInit} from '@angular/core';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ProfileConfig} from '../../../modules/profile/config/profile.config';
import {ContentModel} from '../../models/shared.model';
import {ContentService} from '../../services/content.service';
import {SharedConfig} from '../../config/shared.config';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnDestroy {

  editor = ClassicEditor;
  config = {
    placeholder: 'Type the content here!'
  };

  textEditorForm: FormGroup;
  contentTypes: string[] = ['blog', 'poem', 'story'];

  content: ContentModel = new ContentModel();

  unSubscribe$ = new Subject();
  constructor(private formBuilder: FormBuilder,
              private contentService: ContentService) { }

  ngOnInit() {
    this.createTextEditorForm();
    this.textEditorForm.valueChanges.pipe(takeUntil(this.unSubscribe$)).subscribe(() => {
      this.onFormValuesChanged();
    });
  }

  private createTextEditorForm() {
    this.textEditorForm = this.formBuilder.group({
      title: ['', Validators.required],
      subject: [''],
      body: ['', Validators.required],
      publishedDate: [''],
      contentType: ['', Validators.required]
    });
  }

  private onFormValuesChanged() {
    console.log(this.textEditorForm.value);
  }

  post() {
    // post blog to database
    this.content.title = this.textEditorForm.get('title').value;
    this.content.body = this.textEditorForm.get('body').value;
    this.content.subject = this.textEditorForm.get('subject').value;
    this.content.publishedDate = this.textEditorForm.get('publishedDate').value;
    this.content.contentType = this.textEditorForm.get('contentType').value;
    this.content.isPosted = true;
    this.contentService.saveContent(SharedConfig.postContentApi, this.content).subscribe(res => {
      if (res) {
        this.textEditorForm.reset();
      }
    });
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}

