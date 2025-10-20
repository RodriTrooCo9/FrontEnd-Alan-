import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing-module';
import { Dashboard } from './pages/dashboard/dashboard';
import { Appointments } from './pages/appointments/appointments';
import { MedicalHistory } from './pages/medical-history/medical-history';


@NgModule({
  declarations: [
    Dashboard,
    Appointments,
    MedicalHistory
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
