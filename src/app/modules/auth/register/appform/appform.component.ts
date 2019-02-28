import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Application } from '../../../../shared/models/application/application';
import { ApplicantService } from '../../../../core/services/applicant/applicant.service';
import { CourierService } from '../../../../core/services/auth/courier.service';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-appform',
  templateUrl: './appform.component.html',
  styleUrls: ['./appform.component.scss']
})

export class AppformComponent implements OnInit {

  App: Application;
  Contact: FormGroup;
  Demographics: FormGroup;
  Experience: FormGroup;
  TrackChoice: FormGroup;
  email: string;

  highestEducationValues: string[] = [
    'null', 'Less than High School', 'High School or GED', 'Vocational School', 'Some College', 'Associate\'s Degree',
    'Bachelor\'s Degree', 'Master\'s Degree', 'PhD or Equivalent'
  ];

  validation_messages = {
    'firstName': [
      { type: 'required', message: 'First Name is required' }
    ],
    'lastName': [
      { type: 'required', message: 'Last Name is required' }
    ],
    'phone': [
      { type: 'required', message: 'Phone number is required' }
    ],
    'street': [
      { type: 'required', message: 'Street address is required'}
    ],
    'city': [
      { type: 'required', message: 'City is required'}
    ],
    'state': [
      { type: 'required', message: 'State is required'}
    ],
    'zip': [
      { type: 'required', message: 'Zip code is required'}
    ],
    'gender': [
      { type: 'required', message: 'Required field'}
    ],
    'ethnicity': [
      { type: 'required', message: 'Required field'}
    ],
    'isMarried': [
      { type: 'required', message: 'Required field'}
    ],
    'isVeteran': [
      { type: 'required', message: 'Required field'}
    ],
    'hasGIBill': [
      { type: 'required', message: 'Required field'}
    ],
    'usesGIBill': [
      { type: 'required', message: 'Required field'}
    ],
    'isDependant': [
      { type: 'required', message: 'Required field'}
    ],
    'hasDisabilities': [
      { type: 'required', message: 'Required field'}
    ],
    'isFelon': [
      { type: 'required', message: 'Required field'}
    ],
    'highestEducation': [
      { type: 'required', message: 'Required field'}
    ],
    'isEnrolled': [
      { type: 'required', message: 'Required field'}
    ],
    'employmentStatus': [
      { type: 'required', message: 'Required field'}
    ],
    'incomeLevel': [
      { type: 'required', message: 'Required field'}
    ]
  };

  constructor(private _appService: ApplicantService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _courier: CourierService,
    private _auth: AuthService) {
    this.createForms();
  }

  ngOnInit() {
    this._courier.currentEmail.subscribe(email => this.email = email);
    console.log(this.email);
  }

  createForms() {
    this.Contact = this._formBuilder.group({
      FirstName: new FormControl(null, [
        Validators.required
      ]),
      LastName: new FormControl(null, [
        Validators.required
      ]),
      Phone: new FormControl(null, [
        Validators.required
      ]),
      Street: new FormControl(null, [
        Validators.required
      ]),
      City: new FormControl(null, [
        Validators.required
      ]),
      State: new FormControl(null, [
        Validators.required
      ]),
      Zip: new FormControl(null, [
        Validators.required
      ])
    });

    this.Demographics = this._formBuilder.group({
      Gender: new FormControl(null, [
        Validators.required
      ]),
      Ethnicity: new FormControl(null, [
        Validators.required
      ]),
      IsMarried: new FormControl(null, [
        Validators.required
      ]),
      IsVeteran: new FormControl(null, [
        Validators.required
      ]),
      HasGIBill: new FormControl(null, [
        Validators.required
      ]),
      UsesGIBill: new FormControl(null, [
        Validators.required
      ]),
      IsDependant: new FormControl(null, [
        Validators.required
      ]),
      HasDisabilities: new FormControl(null, [
        Validators.required
      ]),
      DisabilitiesDesc: new FormControl,
      IsFelon: new FormControl(null, [
        Validators.required
      ]),
      FelonyDesc: new FormControl
    });

    this.Experience = this._formBuilder.group({
      HighestEducation: new FormControl(null, [
        Validators.required
      ]),
      HighSchoolName: new FormControl,
      HighSchoolYear: new FormControl,
      CollegeName: new FormControl,
      CollegeYear: new FormControl,
      FieldOfStudy: new FormControl,
      IsEnrolled: new FormControl(null, [
        Validators.required
      ]),
      EmploymentStatus: new FormControl(null, [
        Validators.required
      ]),
      IncomeLevel: new FormControl(null, [
        Validators.required
      ])
    });
    this.TrackChoice = this._formBuilder.group({
      TrackChoice: new FormControl
    });
  }

  onSubmit() {
    this.App = {
      FirstName: this.Contact.value['FirstName'],
      LastName: this.Contact.value['LastName'],
      LevelOfInterest: this.Contact.value['LevelOfInterest'],

      Contact: {
        Phone: this.Contact.value['Phone'],
        StreetAddress: this.Contact.value['Street'],
        City: this.Contact.value['City'],
        State: this.Contact.value['State'],
        Zip: this.Contact.value['Zip']
      },
      Demographic: {
        Gender: this.Demographics.value['Gender'],
        Ethnicity: this.Demographics.value['Ethnicity'],
        Married: this.Demographics.value['IsMarried'],
        Veteran: this.Demographics.value['IsVeteran'],
        GIBill: this.Demographics.value['HasGIBill'],
        UseGIBill: this.Demographics.value['UsesGIBill'],
        SpouseOrVeteranDependant: this.Demographics.value['IsDependant'],
        Disabilities: this.Demographics.value['HasDisabilities'],
        DisabilitiesDescription: this.Demographics.value['DisabilitiesDesc'],
        Felon: this.Demographics.value['IsFelon'],
        FelonyDescription: this.Demographics.value['FelonyDesc']
      },
      Education: {
        HighestEducation: this.highestEducationValues[this.Experience.value['HighestEducation']],
        HighSchoolGraduationInfo: `${this.Experience.value['HighSchoolName']} ${this.Experience.value['HighSchoolYear']}`,
        CollegeGraduationInfo: `${this.Experience.value['CollegeName']} ${this.Experience.value['CollegeYear']}`,
        FieldOfStudy: this.Experience.value['FieldOfStudy'],
        CurrentlyEnrolled: this.Experience.value['IsEnrolled']
      },
      Experience: {
        EmploymentStatus: this.Experience.value['EmploymentStatus'],
        IncomeLevel: this.Experience.value['IncomeLevel']
      },
      // TrackChoice: {
      //   TrackDecisionChoices: [9, 9, 9, 9, 9, 9]
      // }
    };

    this._appService.apply(this.App).subscribe((user: any) => {
      localStorage.clear();
      localStorage.setItem('token', user.token);
      localStorage.setItem('user', JSON.stringify(user.user));
      console.log('Application success!');
      this._router.navigate(['/']);
    });
  }

  test() {
    let App: Application;

    App = {
      FirstName: 'John',
      LastName: 'Doe',
      LevelOfInterest: 5,

      Contact: {
        Phone: '(123)456-7890',
        StreetAddress: '123 Street Way',
        City: 'Townsville',
        State: 'Nowhere',
        Zip: '12345'
      },
      Demographic: {
        Gender: 'male',
        Ethnicity: 'white',
        Married: false,
        Veteran: false,
        GIBill: false,
        UseGIBill: false,
        SpouseOrVeteranDependant: false,
        Disabilities: false,
        DisabilitiesDescription: '',
        Felon: false,
        FelonyDescription: ''
      },
      Education: {
        HighestEducation: 'Some college',
        HighSchoolGraduationInfo: 'Northeastern High',
        CollegeGraduationInfo: 'Uni',
        FieldOfStudy: 'Business',
        CurrentlyEnrolled: false
      },
      Experience: {
        EmploymentStatus: 'part time',
        IncomeLevel: 'rather not say'
      },
      // TrackChoice: {
      //   TrackDecisionChoices: [9, 9, 9, 9, 9, 9]
      // }
    };

    console.log(App);
    this._appService.apply(App).subscribe((user: any) => {
      localStorage.clear();
      localStorage.setItem('token', user.token);
      localStorage.setItem('user', JSON.stringify(user.user));
      console.log('Application success!');
      this._router.navigate(['/']);
    });
  }
}
