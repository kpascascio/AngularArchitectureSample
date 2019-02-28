import { Component, OnInit } from '@angular/core';
import { Assignment } from '../../../shared/models/assignment/assignment';
import { Badges } from '../../../shared/models/badges';
import { AssignmentService } from '../../../core/services/assignment/assignment.service';
import { SortingService } from '../../../shared/services/sorting.service';

@Component({
  selector: 'app-student-assignments',
  templateUrl: './student-assignments.component.html',
  styleUrls: ['./student-assignments.component.scss']
})
export class StudentAssignmentsComponent implements OnInit {

  assignmentData: Assignment[] = [];
  fakeDueDate = '10/10/2019';

  badges = new Badges().generalBadges();

  rows: Array<any> = [];
  columns: Array<any> = [
    {
      title: 'Assignment Number',
      name: 'assignmentNumber'
    },
    {
      title: 'Assignment Name',
      name: 'assignmentName'
    },
    {
      title: 'Badge',
      name: 'badge'
    },
    {
      title: 'Due Date',
      name: 'dueDate'
    }
  ];

  constructor(private _assignmentService: AssignmentService, private _sortService: SortingService) { }

  ngOnInit() {
    this.onAssignmentDisplay();
  }

  onSorted($event) {
    this._sortService.sort($event, this.assignmentData);
  }

  onAssignmentDisplay(): void {
    this._assignmentService.getAllAssignments().subscribe((Assignment: any) => {
      this.assignmentData = Assignment;
      console.log(this.assignmentData);
    });
  }

}
