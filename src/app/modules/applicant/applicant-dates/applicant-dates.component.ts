import { Component, OnInit } from '@angular/core';
import { SortingService } from '../../../shared/services/sorting.service';

@Component({
  selector: 'app-applicant-dates',
  templateUrl: './applicant-dates.component.html',
  styleUrls: ['./applicant-dates.component.scss']
})
export class ApplicantDatesComponent implements OnInit {

  resourceData: any = [
    {
      resourceNumber: '12/18/2018',
      resourceName: 'JavaScript Prework',
      resourceURL: 'https://www.google.com',
      track: 1
    },
    {
      resourceNumber: '1/13/2019',
      resourceName: 'Smiley Face',
      resourceURL: 'https://www.google.com',
      track: 1
    },
    {
      resourceNumber: '3/22/2019',
      resourceName: 'JavaScript Fundamentals',
      resourceURL: 'https://www.google.com',
      track: 1
    },
    {
      resourceNumber: '5/04/2019',
      resourceName: 'DOM Manipulation',
      resourceURL: 'https://www.google.com',
      track: 1
    },
    {
      resourceNumber: '7/16/2019',
      resourceName: 'Portfolio Walkthrough',
      resourceURL: 'https://www.google.com',
      track: 1
    },
    {
      resourceNumber: '8/08/2019',
      resourceName: 'React Fundamentals',
      resourceURL: 'https://www.google.com',
      track: 1
    },
  ];

  rows: Array<any> = [];
  columns: Array<any> = [
    {
      title: 'Date',
      name: 'resourceNumber'
    },
    {
      title: 'Title',
      name: 'resourceName'
    }
  ];

  constructor(private _sortService: SortingService) { }

  ngOnInit() {
  }

  onSorted($event) {
    this._sortService.sort($event, this.resourceData);
  }
}
