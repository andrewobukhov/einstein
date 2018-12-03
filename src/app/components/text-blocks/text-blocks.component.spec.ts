import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlocksComponent } from './text-blocks.component';

describe('TextBlocksComponent', () => {
  let component: TextBlocksComponent;
  let fixture: ComponentFixture<TextBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
