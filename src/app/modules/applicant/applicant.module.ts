import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ApplicantDashComponent } from './applicant-dash/applicant-dash.component';
import { ApplicantRoutingModule } from './applicant-routing.module';
import { AppformComponent } from '../auth/register/appform/appform.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressbarModule } from 'ngx-bootstrap';
import { ApplicantPreworkComponent } from './applicant-prework/applicant-prework.component';
import { ApplicantTrackComponent } from './applicant-track/applicant-track.component';
import { ApplicantProfileComponent } from './applicant-profile/applicant-profile.component';
import { ApplicantDatesComponent } from './applicant-dates/applicant-dates.component';
import { SharedModule } from '../../shared/shared.module';
import { SharedTabComponent } from './shared-tab/shared-tab.component';

@NgModule({
  imports: [
    ApplicantRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressbarModule,
    SharedModule
  ],
  declarations: [ ApplicantDashComponent, ApplicantPreworkComponent,
    ApplicantTrackComponent,
    ApplicantProfileComponent,
    ApplicantDatesComponent,
    SharedTabComponent
  ]
})
export class ApplicantModule { }
