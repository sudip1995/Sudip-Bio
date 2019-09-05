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
  MatRadioModule, MatSelectModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { EditorComponent } from './components/editor/editor.component';
import {SanitizeHtmlPipe} from './pipes/sanitize-Html';
import {OembedPipe} from './pipes/oembed.pipe';
import {NgxSpinnerModule} from 'ngx-spinner';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    EditorComponent,
    SanitizeHtmlPipe,
    OembedPipe,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    CKEditorModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    NgxSpinnerModule
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
    MatSnackBarModule,
    MatSelectModule,
    NgxSpinnerModule,
    // Components
    EditorComponent,

    // Pipes
    SanitizeHtmlPipe,
    OembedPipe,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
