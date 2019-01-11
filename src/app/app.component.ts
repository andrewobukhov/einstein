import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TestCasesData} from './test-data/test-cases-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'app';

  public model: any;

  constructor() {
  }

  ngOnInit() {
    this.model = TestCasesData.item2;
  }

}
