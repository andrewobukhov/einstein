import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-tree-table-view',
  templateUrl: './tree-table-view.component.html',
  styleUrls: ['./tree-table-view.component.scss']
})
export class TreeTableViewComponent implements OnInit, OnChanges {

  @Input()
  model: any;

  public tableNodes = new Map();
  public selectedItem;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.model) {
      this.handleNodes(changes.model.currentValue);
    }
  }

  handleNodes(model) {
    const handleNode = (node, captions) => {
      const value = {captions: captions, items: []};

      if (node.children) {

        node.children.forEach(innerNode => {
          handleNode(innerNode, captions.concat({id: node.id, name: node.name}));
        });

      } else {
        value.items.push({id: node.id, name: node.name});

        if (this.tableNodes.has(this.getCaptionKey(captions))) {
          value.items = value.items.concat(this.tableNodes.get(this.getCaptionKey(captions)).items);
          this.tableNodes.set(this.getCaptionKey(captions), value);
        } else {
          this.tableNodes.set(this.getCaptionKey(captions), value);
        }
      }
    };

    model.forEach(node => {
      handleNode(node, []);
    });
  }

  getCaptionKey(captions: Array<any>) {
    return captions.map(item => item.name).join();
  }
}
