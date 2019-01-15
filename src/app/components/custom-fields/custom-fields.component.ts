import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-fields',
  templateUrl: './custom-fields.component.html',
  styleUrls: ['./custom-fields.component.scss']
})
export class CustomFieldsComponent implements OnInit {

  public keywords: Array<string>;
  public availableKeys = [
    'testEnv',
    'ringCentral',
    'Not Fixed',
    'Will Not Be Fixed',
    'keyword6',
    'keyword7',
    'keyword8',
    'keyword9',
  ];
  public tags: Array<string>;
  public quantity: Array<string>;

  constructor() { }

  ngOnInit() {
    this.keywords = ['Functionality', 'Accepted_ODS', 'Admin Web', 'Directory Integration', 'RBS_Aplicable',
      'Functionality', 'Accepted_ODS', 'Admin Web', 'Directory Integration', 'RBS_Aplicable',
      'Functionality', 'Accepted_ODS', 'Admin Web', 'Directory Integration', 'RBS_Aplicable'];
    this.tags = ['9.1_FT2_XMN', 'Angular 4.0'];
    this.quantity = ['one in release', 'two in release'];
  }

}
