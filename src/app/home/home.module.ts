import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';

import { SharedModule } from '../shared/shared.module';

export const sharedComponents = [HomeComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NguiDatetimePickerModule
  ],
  exports: [sharedComponents],
  declarations: [sharedComponents]
})
export class HomeModule { }
