import { Component, OnInit } from '@angular/core';
import { SortingService } from '../../../../shared/services/sorting.service';
import { Applicant, ApplicantFromDatabase } from '../../../../shared/models/admissions/applicant';
import { AdmissionsService } from '../../../../core/services/admissions/admissions.service';

@Component({
  selector: 'app-admissions-applicants-table',
  templateUrl: './admissions-applicants-table.component.html',
  styleUrls: ['./admissions-applicants-table.component.scss']
})
export class AdmissionsApplicantsTableComponent implements OnInit {
  public applicants: Applicant[] = [];
  searchString: string;
  constructor(
    private _sortService: SortingService,
    private _admissionsService: AdmissionsService
  ) { }

  ngOnInit() {
    this.getAllApplicants();
    /** using this as a tester */
    // this._admissionsService.getAllApplicantsMock().subscribe((d) => {
    //   this.applicants.push(d);
    // });
    // Test
  }

  getAllApplicants() {
    this._admissionsService.getAllApplicants().subscribe((applicantsFromDatabase: ApplicantFromDatabase) => {
      this.applicants = applicantsFromDatabase.applicants;
    });
  }

  onSorted($event) {
    this._sortService.sort($event, this.applicants);
  }
}
