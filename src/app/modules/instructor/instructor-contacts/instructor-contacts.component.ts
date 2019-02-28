import { Component, OnInit } from '@angular/core';
import { Badges } from '../../../shared/models/badges';
import { Tracks } from '../../../shared/models/tracks';
import { Cohorts } from '../../../shared/models/cohorts';
import { SortingService } from '../../../shared/services/sorting.service';

@Component({
  selector: 'app-instructor-contacts',
  templateUrl: './instructor-contacts.component.html',
  styleUrls: ['./instructor-contacts.component.scss']
})
export class InstructorContactsComponent implements OnInit {

  searchString: string;

  badges = new Badges().generalBadges();
  tracks = new Tracks().generalTrack();
  cohorts = new Cohorts().generalCohort();

  status: string[] = ['Perspective', 'Applicant', 'Student', 'Alumnus', 'Counselled Out'];

  studentData: any = [
    {
      studentName: 'Frank Frankson',
      badge: 1,
      cohort: 18,
      email: 'frank@frank.com',
      github: 'https://www.github.com/frankfrankson',
      status: 2
    },
    {
      studentName: 'Sarah Sarahsdaughter',
      badge: 2,
      cohort: 17,
      email: 'sarah@sarah.com',
      github: 'https://www.github.com/sarahsarahsdaughter',
      status: 2
    },
    {
      studentName: 'Trevor Trevorson',
      badge: 0,
      cohort: 20,
      email: 'trever@trever.com',
      github: 'https://www.github.com/trevertreverson',
      status: 1
    },
    {
      studentName: 'Tim Timson',
      badge: 0,
      cohort: 0,
      email: 'tim@tim.com',
      github: 'https://www.github.com/timtimson',
      status: 0
    },
    {
      studentName: 'Jackie Jackiesdaughter',
      badge: 4,
      cohort: 15,
      email: 'jackie@jackie.com',
      github: 'https://www.github.com/jackiejackiesdaughter',
      status: 3
    },
    {
      studentName: 'Robin Robinson',
      badge: 3,
      cohort: 14,
      email: 'robin@robin.com',
      github: 'https://www.github.com/robinrobinson',
      status: 4
    },
  ];

  rows: Array<any> = [];
  columns: Array<any> = [
    {
      title: 'Student Name',
      name: 'studentName'
    },
    {
      title: 'Current Badge',
      name: 'badge'
    },
    {
      title: 'Cohort',
      name: 'cohort'
    },
    {
      title: 'Email Address',
      name: 'email'
    },
    {
      title: 'GitHub URL',
      name: 'github'
    },
    {
      title: 'Status',
      name: 'status'
    }
  ];

  constructor(private _sortService: SortingService) { }

  ngOnInit() {
  }

  onSorted($event) {
    this._sortService.sort($event, this.studentData);
  }
}
