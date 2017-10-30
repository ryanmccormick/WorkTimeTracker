import { Component, Input, OnInit } from '@angular/core';

/**
 * Time Entry Component: Allows a user to input time
 * of day based on hour, minute and am/pm.
 */
@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.scss']
})
export class TimeEntryComponent implements OnInit {

  /**
   * Time Hour Selected (1 - 12).
   */
  selectedHours: number;

  /**
   * Time Minute Selected (00 - 59).
   */
  selectedMin: number;

  /**
   * Time of Day Selected (AM, PM).
   */
  selectedTod: string;

  /**
   * Display Selection Field Labels.
   */
  showLabels: boolean;

  /**
   * Optional: Default hour selection.
   */
  @Input() defaultHr?: number;

  /**
   * Optional: Default minute selection.
   */
  @Input() defaultMin?: number;

  /**
   * Optional: Default time of day selection.
   */
  @Input() defaultTod?: string;

  /**
   * Optional: Display field labels.
   */
  @Input() labels?: boolean;

  /**
   * Time Entry Component: Allows a user to input time
   * of day based on hour, minute and am/pm.
   */
  constructor() { }

  /**
   * Angular component lifecycle event.
   * Enforced by interface OnInit.
   */
  ngOnInit() {
    this.setDefaults();
  }

  /**
   * Set default values based on optional input params.
   */
  setDefaults(): void {
    this.selectedHours = this.defaultHr ? this.defaultHr : 1;
    this.selectedMin = this.defaultMin ? this.defaultMin : 0;
    this.selectedTod = this.defaultTod ? this.defaultTod : 'am';
    this.showLabels = this.labels ? this.labels : false;
  }

}
