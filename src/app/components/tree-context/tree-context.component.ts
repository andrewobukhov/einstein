import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tree-context',
  templateUrl: './tree-context.component.html',
  styleUrls: ['./tree-context.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TreeContextComponent implements OnInit {

  @Input()
  public nodeData: any;
  constructor() { }

  ngOnInit() {
  }

}
