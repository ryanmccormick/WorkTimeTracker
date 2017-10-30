import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { TimeBlock } from './time-block.model';

@Component({
  selector: 'app-time-block-entry',
  templateUrl: './time-block-entry.component.html',
  styleUrls: ['./time-block-entry.component.scss']
})
export class TimeBlockEntryComponent implements OnInit, ControlValueAccessor {

  @Output() blockChanged = new EventEmitter();
  @Output() blockChange = new EventEmitter();
  private _block: TimeBlock;

  constructor() { }

  ngOnInit() {
  }

  get selectedHour(): number {
    return this._block.hours;
  }

  set selectedHour(value: number) {
    const selectedHour = parseInt(value.toString(), 10);
    this._block.hours = selectedHour;
    this.updateBlock();
  }

  get selectedMin(): number {
    return this._block.minutes;
  }

  set selectedMin(value: number) {
    const selectedMin = parseInt(value.toString(), 10);
    this._block.minutes = selectedMin;
    this.updateBlock();
  }

  get block(): TimeBlock {
    return this._block;
  }

  @Input()
  set block(val: TimeBlock) {
    this.setBlock(val);
  }

  setBlock(val: TimeBlock) {
    this._block = val;
  }

  writeValue(val: any): void {
    this.setBlock(val);
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

  updateBlock(): void {
    this.blockChanged.emit(this._block);
    this.blockChange.emit(this._block);
  }
}
