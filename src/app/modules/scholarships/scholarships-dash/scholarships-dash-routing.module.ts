import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScholarshipsDashComponent } from './scholarships-dash.component';

const routes: Routes = [
  {
    path: '',
    component: ScholarshipsDashComponent,
    data: {
      title: 'Scholarships Charts'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScholarshipsDashRoutingModule {}
