import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicantDashComponent } from './applicant-dash/applicant-dash.component';
import { ApplicantPreworkComponent } from './applicant-prework/applicant-prework.component';
import { ApplicantTrackComponent } from './applicant-track/applicant-track.component';
import { ApplicantProfileComponent } from './applicant-profile/applicant-profile.component';
import { ApplicantDatesComponent } from './applicant-dates/applicant-dates.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dash', component: ApplicantDashComponent },
      { path: 'profile', component: ApplicantProfileComponent },
      { path: 'prework', component: ApplicantPreworkComponent },
      { path: 'track', component: ApplicantTrackComponent },
      { path: 'dates', component: ApplicantDatesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule {}
