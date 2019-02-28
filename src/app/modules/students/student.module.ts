// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StudentDashComponent } from './student-dash/student-dash.component';
import { StudentTodoComponent } from './student-todos/student-todo.component';
import { ProgressbarModule } from 'ngx-bootstrap';
import { StudentRoutingModule } from './student-routing.module';
import { StudentHelpQueueComponent } from './student-help-queue/student-help-queue.component';
import { StudentResourcesComponent } from './student-resources/student-resources.component';
import { StudentAssignmentsComponent } from './student-assignments/student-assignments.component';
import { StudentQuizzesComponent } from './student-quizzes/student-quizzes.component';
import { StudentBadgeFeedbackComponent } from './student-badge-feedback/student-badge-feedback.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProgressbarModule,
    StudentRoutingModule,
    SharedModule
  ],
  declarations: [
    StudentDashComponent,
    StudentTodoComponent,
    StudentHelpQueueComponent,
    StudentResourcesComponent,
    StudentAssignmentsComponent,
    StudentQuizzesComponent,
    StudentBadgeFeedbackComponent,
  ]
})
export class StudentModule { }



