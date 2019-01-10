import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {LeftSidebarComponent} from './layout/left-sidebar/left-sidebar.component';

import {TextBlocksComponent} from './components/text-blocks/text-blocks.component';
import {StepsTableComponent} from './components/steps-table/steps-table.component';
import {RightSidebarComponent} from './layout/right-sidebar/right-sidebar.component';
import {ContentOneComponent} from './components/content-one/content-one.component';
import {CustomFieldsComponent} from './components/custom-fields/custom-fields.component';
import {TextTableComponent} from './components/text-table/text-table.component';
import {TreeModule} from 'angular-tree-component';
import {BsDropdownModule, TabsModule} from 'ngx-bootstrap';
import {AngularSplitModule} from 'angular-split';
//import { NgxStickyModule } from 'ng6-sticky';
//import {NgxStickyModule} from 'ngx-sticky';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SummernoteEditorComponent } from './shared/summernote/summernote-editor.component';
import {SharedModule} from './shared/shared.module';
import {DragulaModule, DragulaService} from 'ng2-dragula';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSidebarComponent,
    TextTableComponent,
    TextBlocksComponent,
    StepsTableComponent,
    RightSidebarComponent,
    ContentOneComponent,
    CustomFieldsComponent
  ],
  imports: [
    BrowserModule,
    TreeModule.forRoot(),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    AngularSplitModule,
    SharedModule,
    DragulaModule.forRoot()
    //NgxStickyModule
  ],
  providers: [
    DragulaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
