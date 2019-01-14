import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {LeftSidebarComponent} from './layout/left-sidebar/left-sidebar.component';

import {DescriptionBlocksComponent} from './components/description-blocks/description-blocks.component';
import {StepsTableComponent} from './components/steps-table/steps-table.component';
import {CustomFieldsComponent} from './components/custom-fields/custom-fields.component';
import {TextTableComponent} from './components/text-table/text-table.component';
import {TreeModule} from 'angular-tree-component';
import {BsDropdownModule, TabsModule} from 'ngx-bootstrap';
import {AngularSplitModule} from 'angular-split';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SummernoteEditorComponent } from './shared/summernote/summernote-editor.component';
import {SharedModule} from './shared/shared.module';
import { SimpleDropdownComponent } from './components/simple-dropdown/simple-dropdown.component';
import { TaskHeaderComponent } from './components/task-header/task-header.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { SidebarNavigationComponent } from './components/sidebar-navigation/sidebar-navigation.component';
import {DragulaModule, DragulaService} from 'ng2-dragula';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSidebarComponent,
    TextTableComponent,
    DescriptionBlocksComponent,
    StepsTableComponent,
    CustomFieldsComponent,
    SimpleDropdownComponent,
    TaskHeaderComponent,
    ProjectItemComponent,
    SidebarNavigationComponent
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
  ],
  providers: [
    DragulaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
