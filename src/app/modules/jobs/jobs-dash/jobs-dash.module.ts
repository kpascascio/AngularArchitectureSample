import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { JobsDashComponent } from './jobs-dash.component';
import { JobsDashRoutingModule } from './jobs-dash-routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    JobsDashRoutingModule,
    ChartsModule,
    SharedModule
  ],
  declarations: [ JobsDashComponent ]
})
export class JobsDashModule { }
