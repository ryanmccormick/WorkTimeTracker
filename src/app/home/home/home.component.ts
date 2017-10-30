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

  constructor() { }

  ngOnInit() {
  }


}
