import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {TestCasesData} from './test-data/test-cases-data';
import {SplitComponent} from 'angular-split';
import {CommonService} from './common/common-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  // title = 'app';

  @ViewChild(SplitComponent) splitter;
  public model: any;
  public sideBarOpen = true;

  constructor() {
  }

  ngOnInit() {
    this.model = TestCasesData.item2;
  }

  onCloseSideBar(sideBarClosed) {
    this.sideBarOpen = !sideBarClosed;
    CommonService.leftSideBarState.next(this.sideBarOpen);
  }

}
