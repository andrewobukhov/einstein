import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-text-blocks',
  templateUrl: './text-blocks.component.html',
  styleUrls: ['./text-blocks.component.scss']
})
export class TextBlocksComponent implements OnInit {

  @Input()
  public model: any;

  constructor() { }

  ngOnInit() {
  }

}
