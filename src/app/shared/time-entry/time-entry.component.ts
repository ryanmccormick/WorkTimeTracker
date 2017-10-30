import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.scss']
})
export class TimeEntryComponent implements OnInit {

  selectedHours: number;
  selectedMin: number;
  selectedTod: string;
  showLabels: boolean;

  @Input() defaultHr?: number;
  @Input() defaultMin?: number;
  @Input() defaultTod?: string;
  @Input() labels?: boolean;

  constructor() { }

  ngOnInit() {
    this.setDefaults();
  }

  setDefaults(): void {
    this.selectedHours = this.defaultHr ? this.defaultHr : 1;
    this.selectedMin = this.defaultMin ? this.defaultMin : 0;
    this.selectedTod = this.defaultTod ? this.defaultTod : 'am';
    this.showLabels = this.labels ? this.labels : false;
  }

}
