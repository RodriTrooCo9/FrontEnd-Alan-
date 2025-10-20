import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing-module';
import { Dashboard } from './pages/dashboard/dashboard';
import { Schedule } from './pages/schedule/schedule';


@NgModule({
  declarations: [
    Dashboard,
    Schedule
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
