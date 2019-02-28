import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    AdminRoutingModule,
    ChartsModule,
    SharedModule
  ],
  declarations: [ AdminDashComponent ]
})
export class AdminModule { }
