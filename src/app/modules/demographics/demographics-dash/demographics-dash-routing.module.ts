import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemographicsDashComponent } from './demographics-dash.component';

const routes: Routes = [
  {
    path: '',
    component: DemographicsDashComponent,
    data: {
      title: 'Demographics Charts'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemographicsDashRoutingModule {}
