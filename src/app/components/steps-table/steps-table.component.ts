import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-steps-table',
  templateUrl: './steps-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepsTableComponent implements OnInit {

  @Input()
  public model: any;

  public get steps(): any[] {
    return this.model.children;
  }

  constructor() { }

  ngOnInit() {
  }

}
