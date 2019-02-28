import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Badges } from '../../../shared/models/badges';
import { Tracks } from '../../../shared/models/tracks';
import { Cohorts } from '../../../shared/models/cohorts';
import { AssignmentService } from '../../../core/services/assignment/assignment.service';
import { SortingService } from '../../../shared/services/sorting.service';
import { Assignment } from '../../../shared/models/assignment/assignment';

@Component({
  selector: 'app-instructor-assignments',
  templateUrl: './instructor-assignments.component.html',
  styleUrls: ['./instructor-assignments.component.scss']
})
export class InstructorAssignmentsComponent implements OnInit {

  modalRef: BsModalRef;
  modalConfig = {
    animated: true,
    keyboard: true
  };
  createAssignment: FormGroup;
  classSize = 30;
  progress = 17;

  badges = new Badges().generalBadges();
  tracks = new Tracks().generalTrack();
  cohorts = new Cohorts().generalCohort();

  bsValue = new Date();

  assignmentData: Assignment[] = [];

  rows: Array<any> = [];
  columns: Array<any> = [
    {
      title: 'Assignment Name',
      name: 'assignmentName'
    },
    {
      title: 'Class Progress',
      name: 'progress'
    },
    {
      title: 'Badge',
      name: 'badge'
    },
    {
      title: 'Due Date',
      name: 'dueDate'
    },
    {
      title: 'Visibility',
      name: 'visibility'
    }
  ];

  constructor(
    private _modalService: BsModalService,
    private _fb: FormBuilder,
    private _assignmentService: AssignmentService,
    private _sortService: SortingService) { }

  ngOnInit() {
    this.createAssignment = this._fb.group({
      assignmentNumber: new FormControl(),
      assignmentName: new FormControl(),
      assignmentURL: new FormControl(),
      badge: new FormControl()
    });

    this.onAssignmentDisplay();
  }

  onSorted($event) {
    this._sortService.sort($event, this.assignmentData);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this._modalService.show(template, this.modalConfig);
  }

  onAssignmentDisplay(): void {
    this._assignmentService.getAllAssignments().subscribe((Assignment: any) => {
      this.assignmentData = Assignment;
      console.log(this.assignmentData);
    });

  }

  onAssignment(): void {
    console.log(this.createAssignment.value.badge);
    switch (true) {
      case this.createAssignment.value.badge === '0':
        this._assignmentService.createPreworkAssignment(this.createAssignment.value).subscribe(() => {
          this.onAssignmentDisplay();
          console.log(this.createAssignment.value, 'to createPreworkAssignment');
        });

        this._assignmentService.createAssignment(this.createAssignment.value).subscribe(() => {
          this.onAssignmentDisplay();
        });
        console.log(this.createAssignment.value, 'to createAssignment');
        break;

        default:
          this._assignmentService.createAssignment(this.createAssignment.value).subscribe(() => {
            this.onAssignmentDisplay();
          });
          console.log(this.createAssignment.value, 'to createAssignment');
        break;
    }

    this.createAssignment.reset();
  }

  toggleVisibility(data: any): void {
    data.visibility = !data.visibility;
    Object.assign({ visibility: data.visibility }, data.visibility);
  }
}
