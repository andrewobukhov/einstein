import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-steps-table',
  templateUrl: './steps-table.component.html'
})
export class StepsTableComponent implements OnInit {

  @Input()
  public model: any;

  constructor() { }

  ngOnInit() {
  }

}
