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
import { TaskHeaderComponent } from './components/task-header/task-header.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { SidebarNavigationComponent } from './components/sidebar-navigation/sidebar-navigation.component';
import {DragulaModule, DragulaService} from 'ng2-dragula';
import { ChipsComponent } from './components/chips/chips.component';
import { VersionDropdownComponent } from './components/version-dropdown/version-dropdown.component';
import { AddDropdownComponent } from './components/add-dropdown/add-dropdown.component';
import {RouterModule} from '@angular/router';
import { TreeTableViewComponent } from './components/tree-table-view/tree-table-view.component';
import {FormsModule} from '@angular/forms';
import { TreeContextComponent } from './components/tree-context/tree-context.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSidebarComponent,
    TextTableComponent,
    DescriptionBlocksComponent,
    StepsTableComponent,
    CustomFieldsComponent,
    TaskHeaderComponent,
    ProjectItemComponent,
    SidebarNavigationComponent,
    ChipsComponent,
    VersionDropdownComponent,
    AddDropdownComponent,
    TreeTableViewComponent,
    TreeContextComponent
  ],
  imports: [
    BrowserModule,
    TreeModule.forRoot(),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    SharedModule,
    DragulaModule.forRoot(),
    AngularSplitModule.forRoot(),
    RouterModule.forRoot([]),
    FormsModule
  ],
  providers: [
    DragulaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
