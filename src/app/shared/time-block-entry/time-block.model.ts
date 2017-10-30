export class TimeBlock {
  hours: number;
  minutes: number;

  constructor(hours?: number, minutes?: number) {
    this.hours = hours || 0;
    this.minutes = minutes || 0;
  }
}
