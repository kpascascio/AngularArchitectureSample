import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HeadersService } from '../../../shared/services/headers.service';
import { baseURL } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CareerCoachService {

  constructor(private _http: HttpClient, private _router: Router, private _header: HeadersService) { }

  getAllAssignments() {
    return this._http.get(`${baseURL}/CareerCoach/GetAllAssignments`, { headers: this._header.getHeaders() });
  }

  getAssignment(id: string) {
    return this._http.get(`${baseURL}/CareerCoach/${id}`, { headers: this._header.getHeaders() });
  }
}
