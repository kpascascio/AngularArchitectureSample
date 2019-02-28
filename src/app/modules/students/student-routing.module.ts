import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentDashComponent } from './student-dash/student-dash.component';
import { StudentTodoComponent } from './student-todos/student-todo.component';
import { StudentHelpQueueComponent } from './student-help-queue/student-help-queue.component';
import { StudentResourcesComponent } from './student-resources/student-resources.component';
import { StudentAssignmentsComponent } from './student-assignments/student-assignments.component';
import { StudentQuizzesComponent } from './student-quizzes/student-quizzes.component';
import { StudentBadgeFeedbackComponent } from './student-badge-feedback/student-badge-feedback.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Student'
    },
    children: [
      {
        path: 'dash',
        component: StudentDashComponent,
        data: {
          title: 'Dash'
        }
      },
      {
        path: 'todos',
        component: StudentTodoComponent,
        data: {
          title: 'Todos'
        }
      },
      {
        path: 'queue',
        component: StudentHelpQueueComponent,
        data: {
          title: 'Help Queue'
        }
      },
      {
        path: 'resources',
        component: StudentResourcesComponent,
        data: {
          title: 'Resources'
        }
      },
      {
        path: 'assignments',
        component: StudentAssignmentsComponent,
        data: {
          title: 'Assignments'
        }
      },
      {
        path: 'quizzes',
        component: StudentQuizzesComponent,
        data: {
          title: 'Quizzes'
        }
      },
      {
        path: 'feedback',
        component: StudentBadgeFeedbackComponent,
        data: {
          title: 'Badge Feedback'
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  StudentRoutingModule {}
