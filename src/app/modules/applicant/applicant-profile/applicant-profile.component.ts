import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Application } from '../../../shared/models/application/application';
import { ApplicantService } from '../../../core/services/applicant/applicant.service';
import { AuthService } from '../../../core/services/auth/auth.service';
import { ProfileService } from '../../../core/services/profile/profile.service';
import { Profile } from '../../../shared/models/profile/profile';

@Component({
  selector: 'app-applicant-profile',
  templateUrl: './applicant-profile.component.html',
  styleUrls: ['./applicant-profile.component.scss'],
  styles: [
    '.popover .false { display: none }'
  ]
})
export class ApplicantProfileComponent implements OnInit {
  profileExists = true;
  status: string;

  profile: Application;
  userProfile: Profile;

  constructor(private _appService: ApplicantService,
    private _jwt: JwtHelperService,
    private _profileService: ProfileService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    const tokenPayload = this._jwt.decodeToken(token);
    const userId = tokenPayload.nameid;
    this.status = tokenPayload.role;
    this.getApp(userId);
    this.getProfile(userId);
  }
  getApp(id: number) {
    return this._appService.getApplication(id).subscribe((profile: any) => {
      this.profileExists = true;
      this.profile = profile;
      console.log('Before', this.profile);
      this.profile = this.convertProfileValues(this.profile);
      console.log('After', this.profile);
    }, error => {
      this.profileExists = false;
      console.log(error);
    });
  }

  getProfile(id: string) {
    this._profileService.getProfile(id).subscribe((profile: Profile) => {
      this.userProfile = profile;
    });
  }
  convertProfileValues(profile: any) {
    const areaCode = profile.contact.phone.slice(0, 3);
    const firstThree = profile.contact.phone.slice(3, 6);
    const lastFour = profile.contact.phone.slice(6);

    profile.contact.phone = `(${areaCode}) ${firstThree}-${lastFour}`;

    return profile;
  }
}
