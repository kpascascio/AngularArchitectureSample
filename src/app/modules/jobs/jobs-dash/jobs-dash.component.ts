import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-dash',
  templateUrl: './jobs-dash.component.html',
  styleUrls: ['./jobs-dash.component.scss']
})

export class JobsDashComponent implements OnInit {

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


