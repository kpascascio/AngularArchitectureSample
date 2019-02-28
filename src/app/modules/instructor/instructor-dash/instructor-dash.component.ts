import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor-dash',
  templateUrl: './instructor-dash.component.html',
  styleUrls: ['./instructor-dash.component.scss']
})
export class InstructorDashComponent implements OnInit {

  // numOfWeeks: number[] = []
  cohorts: any[] = [
    {
      class: '.NET July 2018',
      track: '.NET',
      startDate: '2018, 05, 16',
      numOfWeeks: ''
    },
    {
      class: 'JS August 2018',
      track: 'Javascript',
      startDate: '2018, 07, 27',
      numOfWeeks: ''
    },
    {
      class: 'JS September 2018',
      track: 'Javascript',
      startDate: '2018, 08, 23',
      numOfWeeks: ''
    },
    {
      class: '.NET October 2018',
      track: '.NET',
      startDate: '2018, 09, 05',
      numOfWeeks: ''
    },
    {
      class: 'JS December 2018',
      track: 'JavaScript',
      startDate: '2018, 11, 03',
      numOfWeeks: ''
    },
    {
      class: 'JS January 2019',
      track: 'JavaScript',
      startDate: '2019, 00, 04',
      numOfWeeks: ''
    },
    {
      class: '.NET January 2019',
      track: '.NET',
      startDate: '2019, 00, 04',
      numOfWeeks: ''
    },
    {
      class: '.NET February 2019',
      track: '.NET',
      startDate: '2019, 01, 05',
      numOfWeeks: ''
    },
    {
      class: 'PY February 2019',
      track: 'Python',
      startDate: '2019, 01, 05',
      numOfWeeks: ''
    }
  ];

  constructor() {
    this.weekCalc();
  }

  ngOnInit() {
  }

  weekCalc() {
    this.cohorts.forEach(cohort => {
    const year: number = Number(cohort['startDate'].slice(0, 4));
    const month: number = Number(cohort['startDate'].slice(6, 8));
    const day: number = Number(cohort['startDate'].slice(10, 12));
    const now: any = new Date();
    const start: any = new Date(year, month, day);

    const numOfDays: any = Math.ceil((now - start) / 8.64e7);
    const weeks: any = (numOfDays / 7 <= 14) ? numOfDays / 7 : 14;
    this.cohorts['numOfWeeks'] = weeks.toFixed(0);
    // this.numOfWeeks.push(weeks.toFixed(0))
    console.log(this.cohorts['numOfWeeks']);
    });
  }

}
