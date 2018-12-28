import {Component, HostListener, OnInit} from '@angular/core';
import {CommonService} from '../../common/common-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    CommonService.documentClick.next(event);
  }

}
