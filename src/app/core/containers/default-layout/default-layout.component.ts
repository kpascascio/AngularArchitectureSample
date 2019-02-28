import { Component, Input, OnInit } from '@angular/core';
import {
  navItems,
  adminNavItems,
  admissionsNavItems,
  alumniNavItems,
  applicantNavItems,
  instructorNavItems,
  coachNavItems,
  studentNavItems,
  } from '../../nav/_nav';
import { Cohorts } from '../../../shared/models/cohorts';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  public adminNavItems = adminNavItems;
  public admissionsNavItems = admissionsNavItems;
  public instructorNavItems = instructorNavItems;
  public applicantNavItems = applicantNavItems;
  public alumniNavItems = alumniNavItems;
  public coachNavItems = coachNavItems;
  public studentNavItems = studentNavItems;


  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;

  cohorts = new Cohorts().generalCohort();

  constructor(private _auth: AuthService) {
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  onCohortSelect(data: any) {
    console.log(data.value);
  }

  logout() {
    return this._auth.logout();
  }
}
