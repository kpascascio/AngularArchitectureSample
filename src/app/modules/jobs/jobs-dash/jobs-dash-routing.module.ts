import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobsDashComponent } from './jobs-dash.component';

const routes: Routes = [
  {
    path: '',
    component: JobsDashComponent,
    data: {
      title: 'Demographics Charts'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsDashRoutingModule {}
