import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatRadioModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { EditorComponent } from './editor/editor.component';
import {SanitizeHtmlPipe} from './pipes/sanitize-Html';



@NgModule({
  declarations: [
    EditorComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    CommonModule,
    CKEditorModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    EditorComponent,
    SanitizeHtmlPipe
  ]
})
export class SharedModule { }
