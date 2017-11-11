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

  describe('validate timeChange and timeChanged', () => {
    it('timeChanged should be defined', () => {
      expect(component.timeChanged).toBeDefined();
    });

    it('timeChanged should be truthy', () => {
      expect(component.timeChanged).toBeTruthy();
    });

    it('timeChange should be defined', () => {
      expect(component.timeChange).toBeDefined();
    });

    it('timeChange should be truthy', () => {
      expect(component.timeChange).toBeTruthy();
    });
  });

  describe('time hour entry should convert 24 hour time to 12 hour time', () => {
    const time = new Date();

    beforeEach(() => {
      time.setHours(12);
      time.setMinutes(0);
      time.setSeconds(0);
      time.setMilliseconds(0);
      time.setUTCMilliseconds(0);
    });


    it('time field should be defined', () => {
      expect(component.time).toBeDefined();
    });

    it('time should have a default value', () => {
      expect(component.time).toBeTruthy('Default time has not been set');
    });

    it('should set 24 hour time of 13:00 and return 1:00pm', () => {
      time.setHours(13);
      component.time = time;
      fixture.detectChanges();

      // Ensure time has been set
      expect(component.time).toBeTruthy('time has not been set');
      expect(component.time.getHours()).toEqual(13, 'time does not equal test setting');
      expect(component.selectedHours).toEqual(1, 'am/pm conversion is failing');
      expect(component.selectedTod).toEqual('pm', 'am/pm conversion is failing for am/pm display');
    });

    it('should set 24 hour time to 12:00pm, change to am and display 12:00am with time of 00:00 24 hour time', () => {
      time.setHours(12);
      component.time = time;
      fixture.detectChanges();

      // Assert that time has been set to 12 pm.
      expect(component.time).toBeTruthy('time has not been set');
      expect(component.time.getHours()).toEqual(12, 'time does not equal test setting');
      expect(component.selectedHours).toEqual(12, 'am/pm conversion is failing');

      // Change am/pm settings.
      component.selectedTod = 'am';
      fixture.detectChanges();

      // Assert that time has been set to 12 am.
      expect(component.time).toBeTruthy('time has not been set');
      expect(component.time.getHours()).toEqual(0, 'time does not equal 00 when setting to am');
      expect(component.selectedHours).toEqual(12, 'time does not display as 12am');
    });
  });

  describe('time minute entry should operate correctly', () => {
    const time = new Date();

    beforeEach(() => {
      time.setHours(12);
      time.setMinutes(0);
      time.setSeconds(0);
      time.setMilliseconds(0);
      time.setUTCMilliseconds(0);
    });

    it('should be defined', () => {
      expect(component.selectedMin).toBeDefined('selectedMin has not been defined');
    });

    it('should set selectedMinutes', () => {
      time.setMinutes(30);
      component.time = time;
      fixture.detectChanges();

      expect(component.time.getMinutes()).toEqual(30, 'minutes are not getting set correctly');
      expect(component.selectedMin).toEqual(30);
    });
  });

  describe('selectedTod should reflect current am/pm status', () => {
    const time = new Date();

    beforeEach(() => {
      time.setHours(12);
      time.setMinutes(0);
      time.setSeconds(0);
      time.setMilliseconds(0);
      time.setUTCMilliseconds(0);
    });

    it('should be defined', () => {
      expect(component.selectedTod).toBeDefined();
    });

    it('should set 24 hour pm time to am', () => {
      // Set time to 15:00 or 3:00pm
      time.setHours(15);
      component.time = time;

      fixture.detectChanges();

      // Validate that when time is set at 15:00, selectedTod returns 'pm'
      expect(component.time.getHours()).toEqual(15, 'component time has not been set to 15:00');
      expect(component.selectedHours).toEqual(3, 'component not showing correct 12 hour time');
      expect(component.selectedTod).toEqual('pm', 'component not reflecting that time is pm');

      // Change pm to am
      component.selectedTod = 'am';

      fixture.detectChanges();

      // Validate that when 15:00 is switched to am, the selected hours reflect 3:00am
      expect(component.time.getHours()).toEqual(3, 'component time has not been updated when changed to am');
      expect(component.selectedHours).toEqual(3, 'component not showing correct 12 hour time');
      expect(component.selectedTod).toEqual('am', 'component not reflecting that time is now am');
    });
  });

  describe('isMorning should return boolean if current time is am', () => {
    const time = new Date();

    beforeEach(() => {
      time.setHours(12);
      time.setMinutes(0);
      time.setSeconds(0);
      time.setMilliseconds(0);
      time.setUTCMilliseconds(0);
    });

    it('should be defined', () => {
      expect(component.isMorning).toBeDefined();
    });

    it('should return true if time is morning', () => {
      time.setHours(11);
      time.setMinutes(59);
      component.time = time;
      fixture.detectChanges();

      // Validate that time is set to 11:59am
      expect(component.time.getHours()).toEqual(11, 'component time hours are not getting set');
      expect(component.time.getMinutes()).toEqual(59, 'component time minutes are not getting set');

      // Validate isMorning is returning true
      expect(component.isMorning).toEqual(true, 'component not reflecting morning time');
    });

    it('should return false if time is not morning', () => {
      time.setHours(12);
      time.setMinutes(0);
      component.time = time;
      fixture.detectChanges();

      // Validate that time is set to 11:59am
      expect(component.time.getHours()).toEqual(12, 'component time hours are not getting set');
      expect(component.time.getMinutes()).toEqual(0, 'component time minutes are not getting set');

      // Validate isMorning is returning true
      expect(component.isMorning).toEqual(false, 'component not reflecting morning time');
    });
  });

  describe('validate ControlValueAccessor implementation', () => {
    const time = new Date();

    beforeEach(() => {
      time.setHours(12);
      time.setMinutes(0);
      time.setSeconds(0);
      time.setMilliseconds(0);
      time.setUTCMilliseconds(0);
    });

    it('writeValue should be defined', () => {
      expect(component.writeValue).toBeDefined();
    });

    it('writeValue should set the current time', () => {
      component.writeValue(time);
      fixture.detectChanges();

      // Validate writeValue is setting the correct default test time of 12pm.
      expect(component.time.getHours()).toEqual(12, 'writeValue is not setting correct time');
    });

    it('registerOnChange should be defined', () => {
      expect(component.registerOnChange).toBeDefined();
    });

    it('registerOnTouched should be defined', () => {
      expect(component.registerOnTouched).toBeDefined();
    });

    it('setDisabledState should be defined', () => {
      expect(component.setDisabledState).toBeDefined();
    });
  });

});
