import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-dash',
  templateUrl: './student-dash.component.html',
})

export class StudentDashComponent implements OnInit {

  public value: number = Math.floor(Math.random() * 100 + 1);

  // Pie
  public pieChartLabels: string[] = ['Gold Badge Completion', 'Blue Badge Completion', 'Red Badge Students'];
  public pieChartData: number[] = [30, 30, 30];

  public pieChartBGColors: Array<any> = [
    { // grey
      backgroundColor: ['red', 'gold', 'blue']
    },
  ];

  public pieChartType = 'pie';

  constructor() {
  }


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

