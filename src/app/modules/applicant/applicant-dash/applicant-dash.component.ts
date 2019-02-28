import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-applicant-dash',
  templateUrl: './applicant-dash.component.html',
  styleUrls: ['./applicant-dash.component.scss']
})
export class ApplicantDashComponent implements OnInit {
  public username: string;
  public calendlyUrl = 'https://calendly.com/admissions-32';

  constructor(private _jwtHelper: JwtHelperService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    const tokenPayload = this._jwtHelper.decodeToken(token);
    this.username = tokenPayload.unique_name;
  }

}
