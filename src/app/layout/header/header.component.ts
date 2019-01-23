import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {CommonService} from '../../common/common-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    CommonService.documentClick.next(event);
  }
}
