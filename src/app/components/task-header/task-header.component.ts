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
  public sideBarClosed = true;

  constructor() {
    CommonService.leftSideBarState.subscribe(sideBarClosed => this.sideBarClosed = sideBarClosed);
  }

  ngOnInit() {

  }

  isSticked(element) {
    return element.getBoundingClientRect().top < 10;
  }
}
