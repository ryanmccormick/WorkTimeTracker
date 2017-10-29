import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

export const sharedComponents = [HomeComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [sharedComponents],
  declarations: [sharedComponents]
})
export class HomeModule { }
