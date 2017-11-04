import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

import { TimeBlock } from './time-block.model';

/**
 * TimeBlockEntryComponent: Allows a user to enter time blocks
 * in hours and quarter-hour minute blocks.
 */
@Component({
  selector: 'app-time-block-entry',
  templateUrl: './time-block-entry.component.html',
  styleUrls: ['./time-block-entry.component.scss']
})
export class TimeBlockEntryComponent implements OnInit, ControlValueAccessor {

  /**
   * Works with ControlValueAccessor to create ngModel-like
   * two way data binding.
   * @type {EventEmitter<any>}
   */
  @Output() blockChanged = new EventEmitter();

  /**
   * Works with ControlValueAccessor to create ngModel-like
   * two way data binding.
   * @type {EventEmitter<any>}
   */
  @Output() blockChange = new EventEmitter();

  /**
   * Storage for user-selected time block.
   */
  private _block: TimeBlock;

  /**
   * TimeBlockEntryComponent: Allows a user to enter time blocks
   * in hours and quarter-hour minute blocks.
   */
  constructor() { }

  /**
   * Angular lifecycle event method.
   * Enforced by interface OnInit.
   */
  ngOnInit() {
  }

  /**
   * Returns user-selected hour value.
   * @returns {number}
   */
  get selectedHour(): number {
    return this._block.hours;
  }

  /**
   * Stores user-selected hour value.
   * @param {number} value
   */
  set selectedHour(value: number) {
    const selectedHour = parseInt(value.toString(), 10);
    this._block.hours = selectedHour;
    this.updateBlock();
  }

  /**
   * Returns user-selected minute value.
   * @returns {number}
   */
  get selectedMin(): number {
    return this._block.minutes;
  }

  /**
   * Stores user-selected minute value.
   * @param {number} value
   */
  set selectedMin(value: number) {
    const selectedMin = parseInt(value.toString(), 10);
    this._block.minutes = selectedMin;
    this.updateBlock();
  }

  /**
   * Returns user modified TimeBlock.
   * @returns {TimeBlock}
   */
  get block(): TimeBlock {
    return this._block;
  }

  /**
   * Interfaces with setBlock.
   * @param {TimeBlock} val
   */
  @Input()
  set block(val: TimeBlock) {
    this.setBlock(val);
  }

  /**
   * Handles storage of local private _block.
   * @param {TimeBlock} val
   */
  setBlock(val: TimeBlock) {
    this._block = val;
  }

  /**
   * ControlValueAccessor method for setting component value.
   * Used for ngModel-style binding.
   * @param value
   */
  writeValue(val: any): void {
    this.setBlock(val);
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
   * Broadcasts TimeBlock changes to parent components.
   * Used for ngModel-style binding.
   */
  updateBlock(): void {
    this.blockChanged.emit(this._block);
    this.blockChange.emit(this._block);
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
