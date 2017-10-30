import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TimeBlockEntryComponent } from './time-block-entry.component';
import { TimeBlock } from './time-block.model';

describe('TimeBlockEntryComponent', () => {
  let component: TimeBlockEntryComponent;
  let fixture: ComponentFixture<TimeBlockEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ TimeBlockEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeBlockEntryComponent);
    component = fixture.componentInstance;
    component.block = new TimeBlock(1, 15);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
