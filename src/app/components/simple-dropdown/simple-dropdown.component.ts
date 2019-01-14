import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-dropdown',
  templateUrl: './simple-dropdown.component.html',
  styleUrls: ['./simple-dropdown.component.css']
})
export class SimpleDropdownComponent implements OnInit {

  @Input()
  public options: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
