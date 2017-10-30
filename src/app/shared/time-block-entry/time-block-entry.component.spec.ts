import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeBlockEntryComponent } from './time-block-entry.component';

describe('TimeBlockEntryComponent', () => {
  let component: TimeBlockEntryComponent;
  let fixture: ComponentFixture<TimeBlockEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeBlockEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeBlockEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
