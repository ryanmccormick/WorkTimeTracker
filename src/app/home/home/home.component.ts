import { Component, OnInit } from '@angular/core';
import { TimeBlock } from '../../shared/time-block-entry/time-block.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  startTime: Date;
  breakDuration: TimeBlock;
  workTime: TimeBlock;

  constructor() {
    this.startTime = this.cleanDateBuilder();
    this.breakDuration = new TimeBlock(0, 30);
    this.workTime = new TimeBlock(8, 0);
  }

  ngOnInit() {
  }

  private cleanDateBuilder(): Date {
    const time = new Date();
    time.setHours(7);
    time.setMinutes(0);
    time.setSeconds(0);
    time.setUTCSeconds(0);
    time.setMilliseconds(0);

    return time;
  }


}
