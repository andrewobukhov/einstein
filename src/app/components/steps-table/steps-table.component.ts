import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {DragulaService} from 'ng2-dragula';

@Component({
  selector: 'app-steps-table',
  templateUrl: './steps-table.component.html',
  styleUrls: ['./steps-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepsTableComponent implements OnInit {

  @Input()
  public model: any;

  public get steps(): any[] {
    return this.model.children;
  }

  constructor(private dragulaService: DragulaService) {

  }

  ngOnInit() {
    if (!this.dragulaService.find('STEPS')) {
      this.dragulaService.createGroup('STEPS', {
        moves: (el, container, handle) => {
          return handle.className === 'handle';
        }
      });
    }
  }
}
