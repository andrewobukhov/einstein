import {Component, HostListener, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  constructor() {
  }

  public nodes = [];

  public options = {};

  ngOnInit() {
    const nodes = [
      {
        id: 1,
        name: 'RC UPB ALL',
        count: 1945,
        children: [
          {
            id: 2,
            name: 'Telephony (black box)',
            count: 567,
            children: [
              {
                id: 99,
                name: 'UBP-961511: Mobile Web: Add Extension',
                key: 'UBP-961511',
              }, {
                id: 98,
                name: 'UBP-961512: Transfer from paid to trial',
                key: 'UBP-961511',
              }
            ]
          }, {
            id: 3,
            name: 'Acceptance',
            count: 34,
            children: [
              {
                id: 97,
                name: 'UBP-961532: Service parameter to remove',
                key: 'UBP-961511',
              }, {
                id: 96,
                name: 'UBP-961533: Setup wizard',
                key: 'UBP-961511',
              }
            ]
          }
        ]
      },
      {
        id: 4,
        name: 'RC Platform',
        count: 854,
        children: [
          {
            id: 5,
            name: 'Security',
            count: 854,
            children: [
              {
                id: 95,
                name: 'UBP-961545: Check 1st level pages',
                key: 'UBP-961511',
              }, {
                id: 94,
                name: 'Case in case',
                children: [
                  {
                    id: 93,
                    name: 'UBP-961545: Check more pages'
                  }, {
                    id: 92,
                    name: 'UBP-961545: Check more and more pages',
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 7,
        name: 'RC Web',
        count: 12,
        children: [
          {
            id: 8,
            name: 'child1',
            count: 23,
            children: [
              {
                id: 10,
                name: 'child1',
                count: 23
              }, {
                id: 11,
                name: 'child2',
                count: 18
              }
            ]
          }, {
            id: 12,
            name: 'child2',
            count: 18
          }
        ]
      }
      ,
      {
        id: 90,
        name: 'RC UPB ALL',
        count: 12,
        children: [
          {
            id: 8,
            name: 'Core team main (UPartitioning SWAT)',
            count: 23,
            children: [
              {
                id: 67,
                name: 'child1',
                count: 23
              }, {
                id: 54,
                name: 'child2',
                count: 18
              }
            ]
          },
          {
            id: 89,
            name: 'Security',
            count: 854,
            children: [
              {
                id: 34,
                name: 'UBP-961545: Check 1st level pages'
              }, {
                id: 76,
                name: 'Case in case',
                children: [
                  {
                    id: 23,
                    name: 'UBP-961545: Check more pages'
                  }, {
                    id: 110,
                    name: 'UBP-961545: Check more and more pages',
                  }
                ]
              }
            ]
          }
        ]
      }
    ];

    this.nodes = nodes;
  }

  // workaround for update host element height style
  @HostListener("window:scroll", [])
  onWindowScroll() {
  }
}
