import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html'
})
export class LeftSidebarComponent implements OnInit {

  constructor() {
  }

  public nodes: Node[] = [];

  public options = {};

  ngOnInit() {
    const level1 = new Node('Example 1', [new Node('Example 1'), new Node('Example 2')]);
    const level2 = new Node('Example 2', [new Node('Example 1'), new Node('Example 2'), new Node('Example 3'), new Node('Example 4')]);
    this.nodes = [new Node('RC UPB ALL', [level1, level2]), new Node('Example 3'), new Node('Example 4')];
  }
}

export class Node {
  public id: number = Math.round(Math.random() * 1000);

  constructor(public name: String, public children: Node[] = []) {
  }
}
