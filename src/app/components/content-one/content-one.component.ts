import { Component, OnInit } from '@angular/core';
import {TestCasesData} from '../../test-data/test-cases-data';

@Component({
  selector: 'app-content-one',
  templateUrl: './content-one.component.html'
})
export class ContentOneComponent implements OnInit {

  public model: any;

  constructor() {
  }

  ngOnInit() {
    this.model = TestCasesData.item2;
  }

}
