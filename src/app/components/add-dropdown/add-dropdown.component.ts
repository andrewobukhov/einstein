import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-dropdown',
  templateUrl: './add-dropdown.component.html',
  styleUrls: ['./add-dropdown.component.scss']
})
export class AddDropdownComponent implements OnInit {
  @ViewChild('dropdownMenu') dropdownMenuElement: any;

  instanceId: any;
  keys = [];

  @Input()
  rightPosition = false;

  positioningClasses: string;

  private windowHeight: number;

  constructor(private elementRef: ElementRef) {
    this.instanceId = Math.random().toString(36).substring(7);
    this.keys = ['Functionality', 'Accepted_ODS', 'Admin', 'Directory Integration', 'Summary', 'Custom', 'RBS_Aplicable', 'Any', 'Some value', 'Some Value 2'];
  }

  ngOnInit() {
    this.windowHeight = document.body.scrollHeight;
    this.positioningClasses = ' open show ';
  }

  onClose() {
    this.windowHeight = document.body.scrollHeight;
    this.positioningClasses = ' open show ';
  }
  onOpen() {
    this.windowHeight = document.body.scrollHeight;
  }

  determinePositionClass(isOpen) {
    if (!isOpen) {
      return;
    }
    const dpMenu = this.dropdownMenuElement.nativeElement.getElementsByTagName('ul');

    if (!dpMenu.length) {
      return;
    }

    const box = dpMenu[0].getBoundingClientRect();

    const body = document.body;
    const docEl = document.documentElement;

    const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;


    const clientTop = docEl.clientTop || body.clientTop || 0;
    const clientLeft = docEl.clientLeft || body.clientLeft || 0;


    const top = box.top + scrollTop - clientTop;

    const isTopOverflow = top + box.height > this.windowHeight;
    const isRightOverflow = box.x + box.width > document.body.clientWidth;

    const isAlreadyOverflowTop = this.positioningClasses.indexOf('top-overflow') > -1;
    const isAlreadyOverflowRight = this.positioningClasses.indexOf('right-overflow') > -1;

    if (isTopOverflow && !isAlreadyOverflowTop) {
      this.positioningClasses = this.positioningClasses.concat(' top-overflow ');
      // set custom top position. Depends of element height
      dpMenu[0].style.marginTop = (-box.height + 11) + 'px';
    }

    if (isRightOverflow && !isAlreadyOverflowRight) {
      this.positioningClasses = this.positioningClasses.concat(' right-overflow ');
      // set custom top position. Depends of element height
      dpMenu[0].style.marginTop = (-box.height + 11) + 'px';
    }



    return this.positioningClasses;
  }

}
