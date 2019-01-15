import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {

  @Input()
  chipsCollection: Array<any>;

  constructor() {
  }

  ngOnInit() {
  }

}
