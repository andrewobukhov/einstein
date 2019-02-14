import {Component, HostListener, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {TestCasesData} from './test-data/test-cases-data';
import {SplitComponent} from 'angular-split';
import {CommonService} from './common/common-service';
import {sideBarState} from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  // title = 'app';

  @ViewChild(SplitComponent) splitter;
  public model: any;
  public sideBarState = sideBarState.OPENED;

  constructor() {
  }

  ngOnInit() {
    this.model = TestCasesData.item2;
  }

  onCloseSideBar(state) {
    this.sideBarState = state;
    CommonService.leftSideBarState.next(this.sideBarState);
  }
}
