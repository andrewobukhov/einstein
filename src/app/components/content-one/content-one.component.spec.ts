import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentOneComponent } from './content-one.component';

describe('ContentOneComponent', () => {
  let component: ContentOneComponent;
  let fixture: ComponentFixture<ContentOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
