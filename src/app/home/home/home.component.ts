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
    // this.startTime = new Date(0, 0, 0, 6, 0, 0, 0);
    this.startTime = new Date();
    this.startTime.setHours(7);
    this.startTime.setMinutes(0);
    this.startTime.setSeconds(0);
    this.startTime.setUTCSeconds(0);
    this.startTime.setMilliseconds(0);
  }

  ngOnInit() {
  }


}
