import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { DefaultLayoutComponent } from './core/containers';

import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';

import { ForgotPasswordComponent } from './modules/auth/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './modules/auth/change-password/change-password.component';
// import { AppformComponent } from './modules/auth/register/appform/appform.component';



export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent,
    data: {
      title: 'Forgot Password'
    }
  },
  {
    path: 'changepassword',
    component: ChangePasswordComponent,
    data: {
      title: 'Change Password'
    }
  },
  // {
  //   path: 'apply',
  //   component: AppformComponent,
  //   canActivate: [RoleGuard],
  //   data: {
  //     expectedRole: 'User'
  //   }
  // },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'admin',
        loadChildren: './modules/admin/admin.module#AdminModule',
        canActivate: [RoleGuard],
        data: { expectedRole: 'Admin' }
      },
      {
        path: 'applicant',
        loadChildren: './modules/applicant/applicant.module#ApplicantModule',
        canActivate: [RoleGuard],
        data: { expectedRole: 'Applicant' }
      },
      {
        path: 'admissions',
        loadChildren: './modules/admissions/admissions.module#AdmissionsModule',
        canActivate: [RoleGuard],
        data: { expectedRole: 'Admissions' }
      },
      {
        path: 'student',
        loadChildren: './modules/students/student.module#StudentModule',
        data: { roles: 'Student' }
      },
      {
        path: 'learning',
        loadChildren: './modules/instructor/instructor.module#InstructorModule',
        data: { roles: 'Instructor' }
      },
      {
        path: 'dashboard',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
      },
      {
        path: 'demographics',
        loadChildren: './modules/demographics/demographics-dash/demographics-dash.module#DemographicsDashModule'
      },
      {
        path: 'scholarships',
        loadChildren: './modules/scholarships/scholarships-dash/scholarships-dash.module#ScholarshipsDashModule'
      },
      {
        path: 'jobs',
        loadChildren: './modules/jobs/jobs-dash/jobs-dash.module#JobsDashModule'
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login Page'
        }
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
