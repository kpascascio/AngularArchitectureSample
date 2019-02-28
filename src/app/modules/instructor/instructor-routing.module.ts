import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstructorDashComponent } from './instructor-dash/instructor-dash.component';
import { InstructorContactsComponent } from './instructor-contacts/instructor-contacts.component';
import { InstructorResourcesComponent } from './instructor-resources/instructor-resources.component';
import { InstructorAssignmentsComponent } from './instructor-assignments/instructor-assignments.component';
import { InstructorQuizzesComponent } from './instructor-quizzes/instructor-quizzes.component';
import { InstructorBadgeFeedbackComponent } from './instructor-badge-feedback/instructor-badge-feedback.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Instructor'
    },
    children: [
      {
        path: 'dash',
        component: InstructorDashComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'contacts',
        component: InstructorContactsComponent,
        data: {
          title: 'Contacts'
        }
      },
      {
        path: 'resources',
        component: InstructorResourcesComponent,
        data: {
          title: 'Resources'
        }
      },
      {
        path: 'assignments',
        component: InstructorAssignmentsComponent,
        data: {
          title: 'Assignments'
        }
      },
      {
        path: 'quizzes',
        component: InstructorQuizzesComponent,
        data: {
          title: 'Quizzes'
        }
      },
      {
        path: 'feedback',
        component: InstructorBadgeFeedbackComponent,
        data: {
          title: 'Badge Feedback'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule {}
