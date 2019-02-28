import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashComponent } from './admin-dash/admin-dash.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dash', component: AdminDashComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
