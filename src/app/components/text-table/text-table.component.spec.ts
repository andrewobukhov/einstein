import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTableComponent } from './text-table.component';

describe('TextTableComponent', () => {
  let component: TextTableComponent;
  let fixture: ComponentFixture<TextTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
