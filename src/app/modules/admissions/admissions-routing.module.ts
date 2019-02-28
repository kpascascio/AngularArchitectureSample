import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmissionsDashComponent } from './admissions-dash/admissions-dash.component';
import { AdmissionsApplicantsTableComponent } from './applicants/admissions-applicants-table/admissions-applicants-table.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dash', component: AdmissionsDashComponent},
      { path: 'applicants', component: AdmissionsApplicantsTableComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionsRoutingModule {}
