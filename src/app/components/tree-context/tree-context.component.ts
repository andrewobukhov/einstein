import {Component, OnInit, Input, ViewEncapsulation, HostListener} from '@angular/core';

@Component({
  selector: 'app-tree-context',
  templateUrl: './tree-context.component.html',
  styleUrls: ['./tree-context.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TreeContextComponent implements OnInit {

  @Input()
  public nodeData: any;
  @Input()
  public parentWidth: any;

  constructor() { }

  ngOnInit() {
  }

  // workarounds for update host element height style
  @HostListener('window:scroll', [])
  onWindowScroll() {
  }
}
