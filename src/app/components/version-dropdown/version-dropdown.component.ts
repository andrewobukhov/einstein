import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-version-dropdown',
  templateUrl: './version-dropdown.component.html',
  styleUrls: ['./version-dropdown.component.scss']
})
export class VersionDropdownComponent implements OnInit {

  public versions = [];
  public selectedItem = 2;
  public selectedCheckboxIndex = 3;
  public currentVersion = {name: 'Ver. 3', isChecked: false};

  constructor() {
  }

  ngOnInit() {
    this.versions = [
      {
        name: 'Version 1',
        shortName: 'Ver. 1',
        description: 'by Konstantin K., Nov 5th at 15:35'
      },
      {
        name: 'Version 2',
        shortName: 'Ver. 2',
        description: 'by Konstantin K., Nov 15th at 15:35'
      },
      {
        name: 'Version 3',
        shortName: 'Ver. 3',
        description: 'by Konstantin K., Nov 1st at 15:35'
      },
      {
        name: 'Version 4',
        shortName: 'Ver. 4',
        description: 'by Konstantin K., Nov 5th at 15:35'
      },
      {
        name: 'Version 5',
        shortName: 'Ver. 5',
        description: 'by Konstantin K., Nov 5th at 15:35'
      },
      {
        name: 'Version 2.5',
        shortName: 'Ver. 2.5',
        description: 'by Konstantin K., Nov 9th at 15:35'
      }
    ];
  }

  onSelectVersion(idx) {
    this.selectedCheckboxIndex = idx;
    this.currentVersion.isChecked = this.selectedItem === idx;
  }

  onSelectVersionItem(idx) {
    this.selectedItem = idx;
    this.currentVersion.name = this.versions[idx].shortName;
    this.currentVersion.isChecked = this.selectedCheckboxIndex === idx;
  }
}
