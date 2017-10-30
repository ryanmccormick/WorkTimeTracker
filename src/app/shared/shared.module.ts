import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeEntryComponent } from './time-entry/time-entry.component';
import { TimeBlockEntryComponent } from './time-block-entry/time-block-entry.component';
import { FormsModule } from '@angular/forms';

export const sharedComponents = [TimeEntryComponent, TimeBlockEntryComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [sharedComponents],
  declarations: [sharedComponents]
})
export class SharedModule { }
