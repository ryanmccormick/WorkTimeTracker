/**
 * TimeBlock: POTO (Plain Old TypeScript Object) representation
 * of the format for the TimeBlockEntryComponent.
 */
export class TimeBlock {
  /**
   * TimeBlock hours.
   */
  hours: number;

  /**
   * TimeBlock minutes.
   */
  minutes: number;

  /**
   * TimeBlock: POTO (Plain Old TypeScript Object) representation
   * of the format for the TimeBlockEntryComponent.
   * @param {number} hours: Optional default hour value.
   * @param {number} minutes: Optional default minute value.
   */
  constructor(hours?: number, minutes?: number) {
    this.hours = hours || 0;
    this.minutes = minutes || 0;
  }
}
