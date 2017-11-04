import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TimeEntryComponent } from './time-entry/time-entry.component';
import { TimeBlockEntryComponent } from './time-block-entry/time-block-entry.component';

/**
 * Shared components for SharedModule. Shared components are intended to be shared
 * across the application via import of the parent module. sharedComponents are declared and exported.
 * @type {[TimeEntryComponent , TimeBlockEntryComponent]}
 */
export const sharedComponents = [TimeEntryComponent, TimeBlockEntryComponent];

/**
 * SharedModule: Exports and declares components to be shared across
 * the application. This module must be imported into the parent module
 * of components that need access to shared components.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [sharedComponents],
  declarations: [sharedComponents]
})
export class SharedModule { }
