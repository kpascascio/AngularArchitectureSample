import { NgModule } from '@angular/core';
import { InstructorRoutingModule } from './instructor-routing.module';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AccordionModule, ModalModule, ProgressbarModule, BsDatepickerModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InstructorDashComponent } from './instructor-dash/instructor-dash.component';
import { InstructorAssignmentsComponent } from './instructor-assignments/instructor-assignments.component';
import { InstructorBadgeFeedbackComponent } from './instructor-badge-feedback/instructor-badge-feedback.component';
import { InstructorContactsComponent } from './instructor-contacts/instructor-contacts.component';
import { InstructorQuizzesComponent } from './instructor-quizzes/instructor-quizzes.component';
import { InstructorResourcesComponent } from './instructor-resources/instructor-resources.component';
import { SharedModule } from '../../shared/shared.module';




@NgModule({
  imports: [
    CommonModule,
    InstructorRoutingModule,
    ChartsModule,
    AccordionModule,
    ModalModule,
    ProgressbarModule,
    BsDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    InstructorAssignmentsComponent,
    InstructorBadgeFeedbackComponent,
    InstructorContactsComponent,
    InstructorDashComponent,
    InstructorQuizzesComponent,
    InstructorResourcesComponent,
    // SortableColumnComponent,
    // SortableTableDirective
  ]
})
export class InstructorModule { }
