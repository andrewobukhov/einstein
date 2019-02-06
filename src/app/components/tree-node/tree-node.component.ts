import {Component, OnInit, Input, ViewEncapsulation, HostListener} from '@angular/core';
import {TreeContextComponent} from '../tree-context/tree-context.component';

@Component({
  selector: 'app-tree-node-context',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TreeNodeComponent implements OnInit {

  @Input()
  public nodeData: any;
  @Input()
  public parent: any;
  @Input()
  public dropdownContext: TreeContextComponent;

  constructor() { }

  ngOnInit() {
  }

}
