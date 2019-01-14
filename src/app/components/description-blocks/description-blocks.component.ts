import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-description-blocks',
  templateUrl: './description-blocks.component.html',
  styleUrls: ['./description-blocks.component.scss']
})
export class DescriptionBlocksComponent implements OnInit {

  @Input()
  public model: any;

  constructor() { }

  ngOnInit() {
  }

}
