import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-dropdown',
  templateUrl: './add-dropdown.component.html',
  styleUrls: ['./add-dropdown.component.scss']
})
export class AddDropdownComponent implements OnInit {

  public keys = [];

  @Input()
  rightPosition = false;

  constructor() {
  }

  ngOnInit() {

    this.keys = ['Functionality', 'Accepted_ODS', 'Admin', 'Directory Integration', 'Summary', 'Custom', 'RBS_Aplicable', 'Any', 'Some value', 'Some Value 2' ];
  }
}
