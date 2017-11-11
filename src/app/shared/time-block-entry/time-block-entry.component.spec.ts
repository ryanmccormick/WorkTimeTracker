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

  describe('validate blockChange and blockChanged', () => {
    it('blockChanged should be defined', () => {
      expect(component.blockChanged).toBeDefined();
    });

    it('blockChanged should be truthy', () => {
      expect(component.blockChanged).toBeTruthy();
    });

    it('blockChange should be defined', () => {
      expect(component.blockChange).toBeDefined();
    });

    it('blockChange should be truthy', () => {
      expect(component.blockChange).toBeTruthy();
    });
  });

  describe('validate block setter/getter', () => {
    let timeBlock: TimeBlock;

    beforeEach(() => {
      timeBlock = new TimeBlock(5, 30);
    });

    it('should be defined', () => {
      expect(component.block).toBeDefined();
    });

    it('should allow timeblock field to be set', () => {
      component.block = timeBlock;
      fixture.detectChanges();
      expect(component.block).toBeTruthy('Block not set');
      expect(component.block.hours).toEqual(5, 'Block hours not set');
      expect(component.block.minutes).toEqual(30, 'Block minutes not set');
    });
  });

  describe('block update method', () => {
    it('should be defined', () => {
      expect(component.updateBlock).toBeDefined();
    });
  });

  describe('validate selectedHour mechanism', () => {
    let timeBlock: TimeBlock;

    beforeEach(() => {
      timeBlock = new TimeBlock(5, 30);
    });

    it('should be defined', () => {
      expect(component.selectedHour).toBeDefined();
    });

    it('should update block hours when changed', () => {
      component.block = timeBlock;

      fixture.detectChanges();

      // Validate initial default of 5 hours, 30 minutes has been set.
      expect(component.block.hours).toEqual(5, 'Block hours not set');
      expect(component.block.minutes).toEqual(30, 'Block minutes not set');

      // Change hours
      component.selectedHour = 6;

      fixture.detectChanges();

      // Validate the change now reflects 6 hours, 30 minutes.
      expect(component.block.hours).toEqual(6, 'Block hours not set');
      expect(component.block.minutes).toEqual(30, 'Block minutes not set');
    });
  });

  describe('validate selectedMin mechanism', () => {

    let timeBlock: TimeBlock;

    beforeEach(() => {
      timeBlock = new TimeBlock(5, 30);
    });

    it('should be defined', () => {
      expect(component.selectedMin).toBeDefined();
    });

    it('should update block minutes when changed', () => {
      component.block = timeBlock;

      fixture.detectChanges();

      // Validate initial default of 5 hours, 30 minutes has been set.
      expect(component.block.hours).toEqual(5, 'Block hours not set');
      expect(component.block.minutes).toEqual(30, 'Block minutes not set');

      // Change minutes
      component.selectedMin = 45;

      fixture.detectChanges();

      // Validate the change now reflects 5 hours, 45 minutes.
      expect(component.block.hours).toEqual(5, 'Block hours not set');
      expect(component.block.minutes).toEqual(45, 'Block minutes not set');
    });
  });

  describe('validate ControlValueAccessor implementation', () => {
    let timeBlock: TimeBlock;

    beforeEach(() => {
      timeBlock = new TimeBlock(5, 30);
    });

    it('writeValue should be defined', () => {
      expect(component.writeValue).toBeDefined();
    });

    it('writeValue should set the current time', () => {
      component.writeValue(timeBlock);
      fixture.detectChanges();

      // Validate writeValue is setting the correct default time block of 5 hours, 30 minutes
      expect(component.block.hours).toEqual(5, 'writeValue is not setting correct time block');
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
