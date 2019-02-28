import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DemographicsDashComponent } from './demographics-dash.component';
import { DemographicsDashRoutingModule } from './demographics-dash-routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    DemographicsDashRoutingModule,
    ChartsModule,
    SharedModule
  ],
  declarations: [ DemographicsDashComponent ]
})
export class DemographicsDashModule { }
