import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AdmissionsDashComponent } from './admissions-dash/admissions-dash.component';
import { AdmissionsRoutingModule } from './admissions-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AdmissionsApplicantsTableComponent } from './applicants/admissions-applicants-table/admissions-applicants-table.component';
import { AdmissionsUpcomingEventsComponent } from './admissions-upcoming-events/admissions-upcoming-events.component';

@NgModule({
  imports: [
    AdmissionsRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    AdmissionsDashComponent,
    AdmissionsApplicantsTableComponent,
    AdmissionsUpcomingEventsComponent,
  ]
})
export class AdmissionsModule { }
