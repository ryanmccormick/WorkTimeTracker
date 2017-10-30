import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';


/**
 * Time Entry Component: Allows a user to input time
 * of day based on hour, minute and am/pm.
 */
@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.scss']
})
export class TimeEntryComponent implements ControlValueAccessor, OnInit {

  showLabels: boolean;
  @Output() timeChanged = new EventEmitter();
  @Output() timeChange = new EventEmitter();
  @Input() defaultHr?: number;
  @Input() defaultMin?: number;
  @Input() defaultTod?: string;
  @Input() labels?: boolean;
  private _time: Date;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set time(time: Date) {
    this.setTime(time);
  }

  setTime(time: Date) {
    this._time = time;
  }

  get selectedHours(): number {
    const timeOfDayModifier = this.isMorning ? 0 : 12;
    const currentHours = this._time.getHours();
    const calculatedHour = Math.abs(currentHours - timeOfDayModifier);

    return calculatedHour ? calculatedHour : 12;
  }

  set selectedHours(value: number) {
    const timeOfDayModifier = this.isMorning ? 0 : 12;
    const selectedHour = parseInt(value.toString(), 10);
    const calculatedHour = selectedHour + timeOfDayModifier;

    this._time.setHours(calculatedHour);
    this.updateTime();
  }

  get selectedMin(): number {
    const selectedMin = this._time.getMinutes();
    return selectedMin;
  }

  set selectedMin(value: number) {
    const minutes = parseInt(value.toString(), 10);

    this._time.setMinutes(minutes);
    this.updateTime();
  }

  get selectedTod(): string {
    return this.isMorning ? 'am' : 'pm';
  }

  set selectedTod(value: string) {
    const isMorning = (value === 'am');
    const currentHour = this._time.getHours();
    const calculatedHour = isMorning ? currentHour + 12 : currentHour - 12;

    this._time.setHours(calculatedHour);
    this.updateTime();
  }

  writeValue(value: any): void {
    this.setTime(value);
  }

  private _onChange = (_: any) => {
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  private _onTouched = () => {
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  get time() {
    return this._time;
  }

  get isMorning(): boolean {
    const currentHour = this._time.getHours();
    return currentHour >= 0 && currentHour < 12;
  }

  private updateTime() {
    const newTime = new Date(this._time);
    this.timeChange.emit(newTime);
    this.timeChanged.emit(newTime);
  }

}
