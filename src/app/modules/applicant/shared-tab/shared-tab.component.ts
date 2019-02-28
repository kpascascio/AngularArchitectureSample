import { Component, OnInit, Input } from '@angular/core';
import { Assignment } from '../../../shared/models/assignment/assignment';

@Component({
  selector: 'app-shared-tab',
  templateUrl: './shared-tab.component.html',
  styleUrls: ['./shared-tab.component.scss']
})
export class SharedTabComponent implements OnInit {

  @Input() arrayOfData: Assignment[];
  @Input() step: string;

  constructor() { }

  ngOnInit() {
  }

}
