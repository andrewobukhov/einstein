import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {TabsetComponent} from 'ngx-bootstrap';

@Component({
  selector: 'app-tree-context',
  templateUrl: './tree-context.component.html',
  styleUrls: ['./tree-context.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TreeContextComponent implements OnInit {

  @ViewChild('contextDropdown') contextDropdown: any;
  @ViewChild('contextTabs') contextTabs: TabsetComponent;

  @Input()
  globalHeaderOffset: any;

  nodeData: any;
  contextTarget: any;
  lastChangedIds = new Array<any>();

  constructor() {
  }

  ngOnInit() {
  }

  onMove(event) {
    this.lastChangedIds = [];
    if (event.active === true) {
      this.lastChangedIds.push(this.nodeData.id);
    }
  }

  onCancel() {
    this.lastChangedIds = [];
  }

  getOffset() {
    return this.contextTarget ? this.contextTarget.getBoundingClientRect().y - (this.globalHeaderOffset || 0) : 0;
  }

  isCancelAction() {
    return this.lastChangedIds.findIndex(item => item === this.nodeData.id) > -1;
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
