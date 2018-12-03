import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsTableComponent } from './steps-table.component';

describe('StepsTableComponent', () => {
  let component: StepsTableComponent;
  let fixture: ComponentFixture<StepsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
