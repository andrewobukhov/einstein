import {Component, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-tree-context',
  templateUrl: './tree-context.component.html',
  styleUrls: ['./tree-context.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TreeContextComponent implements OnInit {

  @ViewChild('contextDropdown') contextDropdown: any;
  @Input()
  globalHeaderOffset: any;
  @Input()
  scrollRedirectionElement: any;

  nodeData: any;
  contextTarget: any;

  constructor() {
  }

  ngOnInit() {
  }

  getOffset() {
    return this.contextTarget ? this.contextTarget.getBoundingClientRect().y - (this.globalHeaderOffset || 0) : 0;
  }

  redirectScroll(event) {
    event.preventDefault();
    event.stopPropagation();
    event.returnValue = false;
    // this.scrollRedirectionElement.scrollTo(event.scrollX, event.scrollY);
    return false;
  }

  open(nodeData: any, contextTarget: any) {
    this.contextDropdown.hide();
    this.contextDropdown.show();
    this.nodeData = nodeData;
    this.contextTarget = contextTarget;
  }

  hide() {
    this.contextDropdown.hide();
  }

  isOpen(node) {
    return this.contextDropdown.isOpen && node.id === this.nodeData.id;
  }

}
