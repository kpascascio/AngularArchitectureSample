import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { HeadersService } from '../../../shared/services/headers.service';
import { baseURL } from '../../../../environments/environment.prod';
import { UpdateLead } from '../../../shared/models/admissions/updateLead';
import { sequenceSubscriber } from '../../mocks/admissions/applicants';
import { Observable } from 'rxjs';
import { Applicant } from '../../../shared/models/admissions/applicant';

@Injectable({
  providedIn: 'root'
})
export class AdmissionsService {

  constructor(private _http: HttpClient, private _header: HeadersService) { }

  getAllLeads() {
    return this._http.get(`${baseURL}/admissions/getallleads`, { headers: this._header.getHeaders() });
  }

  getAllApplicants() {
    return this._http.get(`${baseURL}/AdmissionsApplication/ApplicantList`, { headers: this._header.getHeaders() });
  }

  getAllApplicantsMock(): Observable<Applicant> {
    return new Observable(sequenceSubscriber);
  }

  updateLead(updateLead: UpdateLead) {
    return this._http.put(`${baseURL}/admissions/updatelead`, updateLead, { headers: this._header.getHeaders() });
  }
}
