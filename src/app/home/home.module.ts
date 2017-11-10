import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';

/**
 * Shared components for HomeModule. Shared components are intended to be shared
 * across the application via import of the parent module. sharedComponents are declared and exported.
 * @type {[HomeComponent]}
 */
export const sharedComponents = [HomeComponent];

/**
 * HomeModule is a feature module that packages dependency for the main application view.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [sharedComponents],
  declarations: [sharedComponents]
})
export class HomeModule { }
