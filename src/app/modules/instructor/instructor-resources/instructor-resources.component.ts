import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Tracks } from '../../../shared/models/tracks';
import { SortingService } from '../../../shared/services/sorting.service';

@Component({
  selector: 'app-instructor-resources',
  templateUrl: './instructor-resources.component.html',
  styleUrls: ['./instructor-resources.component.scss']
})
export class InstructorResourcesComponent implements OnInit {

  modalRef: BsModalRef;
  modalConfig = {
    animated: true,
    keyboard: true
  };
  createResource: FormGroup;

  tracks = new Tracks().generalTrack();

  resourceData: any = [
    {
      resourceNumber: 100,
      resourceName: 'JavaScript Prework',
      resourceURL: 'https://www.google.com',
      track: 1
    },
    {
      resourceNumber: 101,
      resourceName: 'Smiley Face',
      resourceURL: 'https://www.google.com',
      track: 1
    },
    {
      resourceNumber: 101,
      resourceName: 'JavaScript Fundamentals',
      resourceURL: 'https://www.google.com',
      track: 1
    },
    {
      resourceNumber: 151,
      resourceName: 'DOM Manipulation',
      resourceURL: 'https://www.google.com',
      track: 1
    },
    {
      resourceNumber: 151,
      resourceName: 'Portfolio Walkthrough',
      resourceURL: 'https://www.google.com',
      track: 1
    },
    {
      resourceNumber: 201,
      resourceName: 'React Fundamentals',
      resourceURL: 'https://www.google.com',
      track: 1
    },
  ];

  rows: Array<any> = [];
  columns: Array<any> = [
    {
      title: 'Resource Number',
      name: 'resourceNumber'
    },
    {
      title: 'Resource Name',
      name: 'resourceName'
    },
    {
      title: 'Track',
      name: 'track'
    },
    {
      title: 'Visibility',
      name: 'visibility'
    }
  ];

  constructor(private _modalService: BsModalService, private _fb: FormBuilder, private _sortService: SortingService) { }

  ngOnInit() {
    this.createResource = this._fb.group({
      resourceNumber: new FormControl(),
      resourceName: new FormControl(),
      track: new FormControl(),
      resourceURL: new FormControl()
    });

    // this.onResourceDisplay()
  }

  onSorted($event) {
    this._sortService.sort($event, this.resourceData);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this._modalService.show(template, this.modalConfig);
  }

  // onResourceDisplay() : void {
    //   this._resourceService.getAllAssignments().subscribe((Assignment: any) => this.resourceData = Assignment)
    // }

    onResourceCreate(): void {
      // this._resourceService.createAssignment(this.createResource.value).subscribe(() => {
        //   this.onResourceDisplay()
        // })

        this.resourceData.push(this.createResource.value);

        this.createResource.reset();
        console.log('createResource:', this.createResource, 'resourceData:', this.resourceData);
      }

  toggleVisibility(data: any): void {
    data.visibility = !data.visibility;
    Object.assign({ visibility: data.visibility }, data.visibility);
  }

}
