import {Component, NgZone, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {TestCasesData} from './test-data/test-cases-data';
import {SplitComponent} from 'angular-split';
import {CommonService} from './common/common-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'app';

  @ViewChild(SplitComponent) splitter;
  public model: any;
  public splitterSizes = {first: 20, second: 80};
  private sideBarOpen = true;


  constructor(private zone: NgZone) {
  }

  ngOnInit() {
    this.model = TestCasesData.item2;
    this.splitter.dragProgress$.subscribe(x => {
      console.log(this.splitter.getVisibleAreaSizes());
      this.splitterSizes = {first: x.sizes[0], second: x.sizes[1]};

      if (x.sizes[1] <= 100 && !this.sideBarOpen) {
        this.sideBarOpen = !this.sideBarOpen;
        CommonService.leftSideBarState.next(this.sideBarOpen);
        this.splitterSizes = {first: 20, second: 80};
        this.splitter.setVisibleAreaSizes([20, 80]);
      }

    });


  }

  onCloseSideBar() {
    this.sideBarOpen = !this.sideBarOpen;
    CommonService.leftSideBarState.next(this.sideBarOpen);

    if (this.sideBarOpen) {
      this.splitterSizes = {first: 20, second: 80};
      this.splitter.setVisibleAreaSizes([20, 80]);
    } else {
      this.splitter.setVisibleAreaSizes([0.5, 99.5]);
      this.splitterSizes = {first: 0.5, second: 99.5};
    }

  }

}
