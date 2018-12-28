import {SummernoteEditorComponent} from './summernote/summernote-editor.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgxSummernoteModule} from 'ngx-summernote';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxSummernoteModule
  ],
  declarations: [
    SummernoteEditorComponent
  ],
  exports: [
    SummernoteEditorComponent
  ]
})
export class SharedModule {

}
