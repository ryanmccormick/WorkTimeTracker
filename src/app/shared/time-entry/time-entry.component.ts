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

  /**
   * Optional Input: Show Hour, Minute and AM/PM Labels
   */
  @Input() showLabels? = false;

  /**
   * Works with ControlValueAccessor to create ngModel-like
   * two way data binding.
   * @type {EventEmitter<any>}
   */
  @Output() timeChanged = new EventEmitter();

  /**
   * Works with ControlValueAccessor to create ngModel-like
   * two way data binding.
   * @type {EventEmitter<any>}
   */
  @Output() timeChange = new EventEmitter();

  /**
   * Instance variable stores time from input accessor 'set time'
   */
  private _time: Date;

  /**
   * Time Entry Component: Allows a user to input time
   * of day based on hour, minute and am/pm.
   */
  constructor() { }

  /**
   * Angular lifecycle event method.
   * Enforced by interface OnInit.
   */
  ngOnInit() {
  }

  /**
   * Returns value of private _time;
   * @returns {Date}
   */
  get time() {
    return this._time;
  }

  /**
   * Interfaces with setTime.
   * @param {Date} time
   */
  @Input()
  set time(time: Date) {
    this.setTime(time);
  }

  /**
   * Handles setting local private _time.
   * @param {Date} time
   */
  setTime(time: Date) {
    this._time = time;
  }

  /**
   * Returns user selected hours for control display.
   * @returns {number}
   */
  get selectedHours(): number {
    const timeOfDayModifier = this.isMorning ? 0 : 12;
    const currentHours = this._time.getHours();
    const calculatedHour = Math.abs(currentHours - timeOfDayModifier);

    return calculatedHour ? calculatedHour : 12;
  }

  /**
   * Stores user selected hours.
   * @param {number} value
   */
  set selectedHours(value: number) {
    const timeOfDayModifier = this.isMorning ? 0 : 12;
    const selectedHour = parseInt(value.toString(), 10);
    const calculatedHour = selectedHour + timeOfDayModifier;

    this._time.setHours(calculatedHour);
    this.updateTime();
  }

  /**
   * Returns user selected minutes for control display.
   * @returns {number}
   */
  get selectedMin(): number {
    const selectedMin = this._time.getMinutes();
    return selectedMin;
  }

  /**
   * Stores user selected minutes.
   * @param {number} value
   */
  set selectedMin(value: number) {
    const minutes = parseInt(value.toString(), 10);

    this._time.setMinutes(minutes);
    this.updateTime();
  }

  /**
   * Returns user selected AM/PM value for control display.
   * @returns {string}
   */
  get selectedTod(): string {
    return this.isMorning ? 'am' : 'pm';
  }

  /**
   * Stores user selected AM/PM value.
   * @param {string} value
   */
  set selectedTod(value: string) {
    const isMorning = (value === 'am');
    const currentHour = this._time.getHours();
    const calculatedHour = isMorning ? currentHour + 12 : currentHour - 12;

    this._time.setHours(calculatedHour);
    this.updateTime();
  }

  /**
   * Returns true if time is am.
   * @returns {boolean}
   */
  get isMorning(): boolean {
    const currentHour = this._time.getHours();
    return currentHour >= 0 && currentHour < 12;
  }

  /**
   * ControlValueAccessor method for setting component value.
   * Used for ngModel-style binding.
   * @param value
   */
  writeValue(value: any): void {
    this.setTime(value);
  }

  /**
   * ControlValueAccessor method for registering OnChange behavior.
   * Used for ngModel-style binding.
   * @param fn
   */
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  /**
   * ControlValueAccessor method for registering OnTouched behavior.
   * Used for ngModel-style binding.
   * @param fn
   */
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  /**
   * ControlValueAccessor method for setting component disabled state.
   * Used for ngModel-style binding.
   * @param {boolean} isDisabled
   */
  setDisabledState(isDisabled: boolean): void {
  }

  /**
   * Broadcasts changes to parent components.
   * Used for ngModel-style binding.
   */
  private updateTime() {
    const newTime = new Date(this._time);
    this.timeChange.emit(newTime);
    this.timeChanged.emit(newTime);
  }

  /**
   * Works with registerOnChange.
   * Used for handling ngModel-style binding behavior.
   * @param _
   * @private
   */
  private _onChange = (_: any) => {
  }

  /**
   * Works with registerOnTouched.
   * Used for handling ngModel-style binding behavior.
   * @private
   */
  private _onTouched = () => {
  }

}
