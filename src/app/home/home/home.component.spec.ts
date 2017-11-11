import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { TimeBlock } from '../../shared/time-block-entry/time-block.model';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('field and setup validation', () => {
    it('startTime should be defined', () => {
      expect(component.startTime).toBeDefined();
    });

    it('breakDuration should be defined', () => {
      expect(component.breakDuration).toBeDefined();
    });

    it('workTime should be defined', () => {
      expect(component.workTime).toBeDefined();
    });

    it('leaveTime should be defined', () => {
      expect(component.leaveTime).toBeDefined();
    });
  });

  describe('default validation', () => {
    it('setDefaults should be defined', () => {
      expect(component.setDefaults).toBeDefined();
    });

    it('should validate default leave time of 3:30pm', () => {
      component.setDefaults();
      fixture.detectChanges();
      expect(component.leaveTime).toEqual('3:30 pm');
    });

    it('should set default start time of 7:00am', () => {
      // Validate default start time has been set
      expect(component.startTime.getHours()).toEqual(7, 'default start not not set to 7am');

      // Change start time to 8:00am
      component.startTime.setHours(8);
      fixture.detectChanges();

      // Validate time changed to 8:00am
      expect(component.startTime.getHours()).toEqual(8, 'time not changed');
      component.setDefaults();
      fixture.detectChanges();

      expect(component.startTime.getHours()).toEqual(7, 'time not set back to default');
    });

    it('should set default breakDuration to 30 minutes', () => {
      const defaultBreak = new TimeBlock(0, 30);

      // Validate default break time has been set to 30 minutes
      expect(component.breakDuration).toEqual(defaultBreak);

      component.breakDuration.minutes = 45;
      fixture.detectChanges();

      // Validate break time update to 45 minutes
      expect(component.breakDuration.minutes).toEqual(45, 'break duration has not been updated');

      // Set defaults and validate break duration has been set back to 30 minutes
      component.setDefaults();
      fixture.detectChanges();

      // Validate break time has been set back to default of 30 minutes
      expect(component.breakDuration).toEqual(defaultBreak, 'Break time has not been set back to default');
    });

    it('should set default workTime to 8 hours', () => {
      const defaultWorktime = new TimeBlock(8, 0);
      expect(component.workTime).toEqual(defaultWorktime);

      // Update work time to 9 hours
      component.workTime.hours = 9;
      fixture.detectChanges();

      // Validate worktime has been updated to 9 hours
      expect(component.workTime.hours).toEqual(9, 'work time has not been updated');

      // Set back to default, validate that work time has been set back to 8 hours.
      component.setDefaults();
      fixture.detectChanges();
      expect(component.workTime).toEqual(defaultWorktime);
    });
  });
});
