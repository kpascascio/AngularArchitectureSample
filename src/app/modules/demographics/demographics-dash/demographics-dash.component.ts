import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demographics-dash',
  templateUrl: './demographics-dash.component.html',
  styleUrls: ['./demographics-dash.component.scss']
})

export class DemographicsDashComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: string[] = ['White',
            'Hispanic Latino or Spanish Origin', 'Black or African American',
            'Asian American', 'American Indian or Alaska Native',
            'Middle Eastern', 'North African',
            'Native Hawaiin or Pacific Islander',
            'Some other race', 'Not answered'
          ];

  public doughnutChartData: number[] = [350, 150, 150, 25, 5, 10, 3, 1, 4, 5];
  public doughnutChartType = 'doughnut';
  public doughnutChartBGColors: Array<any> = [
    { // grey
      backgroundColor: ['blue', 'yellow', 'red', 'black', 'green', 'purple', 'orange', 'brown', 'grey', 'black']
    },
  ];


// Identify As
public genderChartLabels: string[] = ['Female',
             'Male', 'Non-Binary',
             'Prefer Not To Say', 'Fill In'
      ];

public genderChartData: number[] = [350, 350, 2, 2, 1];
public genderChartType = 'doughnut';
public genderChartBGColors: Array<any> = [
  { // grey
  backgroundColor: ['blue', 'yellow', 'red', 'green', 'gray']
  },
];



// Education Demographics
public educationalChartLabels: string[] = [
  'some high school', 'high school only', 'some college',
  'bachelor\'s degree', 'master\'s degree', 'phd'
];

public educationalChartData: number[] = [5, 50, 200, 200, 15, 5];
public educationalChartType = 'doughnut';
public educationalChartBGColors: Array<any> = [
  { // grey
  backgroundColor: ['blue', 'yellow', 'red', 'green', 'gray']
  },
];


  constructor() { }

  ngOnInit() {
  }

  // Events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}


