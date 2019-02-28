import { Component, OnInit } from '@angular/core';
import { SortingService } from '../../../shared/services/sorting.service';
import { AssignmentService } from '../../../core/services/assignment/assignment.service';
import { Assignment, Track } from '../../../shared/models/assignment/assignment';

@Component({
  selector: 'app-applicant-prework',
  templateUrl: './applicant-prework.component.html',
  styleUrls: ['./applicant-prework.component.scss']
})
export class ApplicantPreworkComponent implements OnInit {

  step = 'getting started';

  pythonArray: Assignment[] = [];
  generalAssignmentArray: Assignment[] = [];
  jsArray: Assignment[] = [];
  dotnetArray: Assignment[] = [];

  constructor(private _assignmentService: AssignmentService) { }

  ngOnInit() {
    this._assignmentService.getAllPreworkAssignments().subscribe((assignment: Assignment) => {
      switch (assignment.track) {
        case Track.PYTHON:
        this.pythonArray.push(assignment);
        break;
        case 'javascript':
        this.jsArray.push(assignment);
        break;
        case '.net':
        this.dotnetArray.push(assignment);
        break;
        default:
        this.generalAssignmentArray.push(assignment);
      }
    });
  }
}
