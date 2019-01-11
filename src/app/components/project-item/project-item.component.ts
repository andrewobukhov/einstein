import { Component, OnInit } from '@angular/core';
import {TestCasesData} from '../../test-data/test-cases-data';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  public model: any;

  constructor() {
  }

  ngOnInit() {
    this.model = TestCasesData.item2;
  }
}
