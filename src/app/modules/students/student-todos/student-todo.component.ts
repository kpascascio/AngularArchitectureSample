import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-todo',
  templateUrl: './student-todo.component.html',
})
export class StudentTodoComponent implements OnInit {

  // Pie
  public barChartLabels: string[] = ['Cold Leads', 'Lukewarm Leads', 'Warm Leads', 'Hot Leads', 'The Glen Gary Leads'];
  public barChartData: number[] = [180, 150, 130, 100, 60];

  public barChartBGColors: Array<any> = [
    { // grey
      backgroundColor: ['blue', 'yellow', 'red', 'green', 'green']
    },
  ];

  public barChartType = 'bar';

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

