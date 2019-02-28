import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeadersService } from '../../../shared/services/headers.service';
import { baseURL } from '../../../../environments/environment.prod';
import { Application } from '../../../shared/models/application/application';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(private _http: HttpClient, private _header: HeadersService) { }

  apply(applicant: Application) {
    return this._http.post(`${baseURL}/Application/`, applicant, { headers: this._header.getHeaders() });
  }

  getApplication(id: number) {
    return this._http.get(`${baseURL}/Application/GetByOwner/${id}`, { headers: this._header.getHeaders() });
  }
}
