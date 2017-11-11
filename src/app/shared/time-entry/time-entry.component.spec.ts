import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEntryComponent } from './time-entry.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TimeEntryComponent', () => {
  let component: TimeEntryComponent;
  let fixture: ComponentFixture<TimeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ TimeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeEntryComponent);
    component = fixture.componentInstance;
    component.time = new Date();
    // de = null;
    // el = null;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate that if show labels is not set that it defaults to false', () => {
    expect(component.showLabels).toEqual(false);
  });

  it('should show labels when input showLabels is set to true', () => {
    let labelList: DebugElement[];
    let elements: HTMLElement[];

    component.showLabels = true;
    fixture.detectChanges();

    labelList = fixture.debugElement.queryAll(By.css('label'));
    elements = labelList.map(item => item.nativeElement);

    expect(labelList).toBeTruthy('label element not found');
    expect(component.showLabels).toEqual(true, 'show labels');
    expect(elements[0].textContent).toContain('Hours');
    expect(elements[1].textContent).toContain('Minutes');
    expect(elements[2].textContent).toContain('AM/PM');
  });


});
