import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ScholarshipsDashComponent } from './scholarships-dash.component';
import { ScholarshipsDashRoutingModule } from './scholarships-dash-routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    ScholarshipsDashRoutingModule,
    ChartsModule,
    SharedModule
  ],
  declarations: [ ScholarshipsDashComponent ]
})
export class ScholarshipsDashModule { }

