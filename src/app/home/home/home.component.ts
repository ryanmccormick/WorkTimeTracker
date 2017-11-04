import { Component, OnInit } from '@angular/core';
import { TimeBlock } from '../../shared/time-block-entry/time-block.model';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  startTime: Date;
  breakDuration: TimeBlock;
  workTime: TimeBlock;

  constructor() { }

  ngOnInit() {
    this.setDefaults();
  }

  get leaveTime(): any {
    const leaveTime = this._leaveTimeBuilder(this.startTime);
    const momentTime: Moment = moment(leaveTime);

    return momentTime.format('h:mm a');
  }

  setDefaults(): void {
    this.startTime = this._cleanDateBuilder();
    this.breakDuration = new TimeBlock(0, 30);
    this.workTime = new TimeBlock(8, 0);
  }

  private _leaveTimeBuilder(startTime: Date): Date {
    const leaveTime = new Date(startTime);
    const leaveHour = leaveTime.getHours() + this.workTime.hours + this.breakDuration.hours;
    const leaveMinute = leaveTime.getMinutes() + this.workTime.minutes + this.breakDuration.minutes;

    // Adjust for work and break time
    leaveTime.setHours(leaveHour);
    leaveTime.setMinutes(leaveMinute);

    return leaveTime;
  }

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
