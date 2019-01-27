import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CommonService} from '../../common/common-service';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskHeaderComponent implements OnInit {

  @Input()
  public model: any;
  public sideBarOpened = true;
  public keys = [];
  public isShowAdd = false;

  constructor() {
    CommonService.leftSideBarState.subscribe(sideBarClosed => this.sideBarOpened = !sideBarClosed);
  }

  ngOnInit() {
    this.keys = ['Functionality', 'Accepted_ODS', 'Admin', 'Directory Integration', 'Summary',
      'Custom', 'RBS_Aplicable', 'Any', 'Some value', 'Some Value 2' ];
  }

  isSticked(element) {
    return element.getBoundingClientRect().top < 10;
  }
}
