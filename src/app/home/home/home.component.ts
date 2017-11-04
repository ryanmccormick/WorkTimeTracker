import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

import { TimeBlock } from '../../shared/time-block-entry/time-block.model';

/**
 * HomeComponent provides the WorkTime calculator view.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**
   * User selected start time.
   */
  startTime: Date;

  /**
   * User selected break duration in hours and minutes.
   */
  breakDuration: TimeBlock;

  /**
   * User selected work time duration in hours and minutes.
   */
  workTime: TimeBlock;

  /**
   * HomeComponent provides the WorkTime calculator view.
   */
  constructor() { }

  /**
   * Angular lifecycle event method.
   * Enforced by interface OnInit.
   */
  ngOnInit() {
    this.setDefaults();
  }

  /**
   * Provides leave time calculation based off of user-selected
   * values for start time + break duration + work day duration.
   * @returns {any}
   */
  get leaveTime(): any {
    const leaveTime = this._leaveTimeBuilder(this.startTime);
    const momentTime: Moment = moment(leaveTime);

    return momentTime.format('h:mm a');
  }

  /**
   * Sets defaults for arriving at 7:00am, taking a 30 minute lunch
   * with a workday duration of eight hours.
   */
  setDefaults(): void {
    this.startTime = this._cleanDateBuilder();
    this.breakDuration = new TimeBlock(0, 30);
    this.workTime = new TimeBlock(8, 0);
  }

  /**
   * Calculates leave time based on user inputs.
   * @param {Date} startTime: User selected start time.
   * @returns {Date}
   * @private
   */
  private _leaveTimeBuilder(startTime: Date): Date {
    const leaveTime = new Date(startTime);
    const leaveHour = leaveTime.getHours() + this.workTime.hours + this.breakDuration.hours;
    const leaveMinute = leaveTime.getMinutes() + this.workTime.minutes + this.breakDuration.minutes;

    leaveTime.setHours(leaveHour);
    leaveTime.setMinutes(leaveMinute);

    return leaveTime;
  }

  /**
   * Provides initial date object for input to the calculation.
   * Sets an initial start time of 7:00am.
   * @returns {Date}
   * @private
   */
  private _cleanDateBuilder(): Date {
    const time = new Date();
    time.setHours(7);
    time.setMinutes(0);
    time.setSeconds(0);
    time.setUTCSeconds(0);
    time.setMilliseconds(0);

    return time;
  }

}
