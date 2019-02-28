import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-applicant-track',
  templateUrl: './applicant-track.component.html',
  styleUrls: ['./applicant-track.component.scss']
})
export class ApplicantTrackComponent implements OnInit {

  trackBuilder: FormGroup;
  trackArray: number[] = [];
  a = 'Logic';
  b = 'Big Data';
  c = 'Design';
  d = 'Drag and Drop Coding';

  constructor(private _formBuilder: FormBuilder) {
    this.createForms();
  }

  ngOnInit() {
  }

  createForms() {
    this.trackBuilder = this._formBuilder.group({
      q1: new FormControl,
      q2: new FormControl,
      q3: new FormControl,
      q4: new FormControl,
      q5: new FormControl,
      q6: new FormControl
    });
  }

  onSubmit() {
    console.log(this.trackBuilder.value);
    for (let index = 0; index < 6; index++) {
      const selector = 'q' + (index + 1);
      const element = this.trackBuilder.value[selector];
      switch (element) {
        case 0:
          this.trackArray.push(-9);
        break;
        case 12.5:
          this.trackArray.push(-7);
        break;
        case 25:
          this.trackArray.push(-5);
        break;
        case 37.5:
          this.trackArray.push(-3);
        break;
        case 50:
          this.trackArray.push(1);
        break;
        case 62.5:
          this.trackArray.push(3);
        break;
        case 75:
          this.trackArray.push(5);
        break;
        case 87.5:
          this.trackArray.push(7);
        break;
        case 100:
          this.trackArray.push(9);
        break;

        default:
          this.trackArray.push(1);
        break;
      }
    }
    console.log(this.trackArray);
  }
}
