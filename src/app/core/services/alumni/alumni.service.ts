import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HeadersService } from '../../../shared/services/headers.service';
import { baseURL } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AlumniService {

  constructor(private _http: HttpClient, private _router: Router, private _header: HeadersService) { }

  getAllAlumni() {
    return this._http.get(`${baseURL}/Alumni/GetAllAlumni`, { headers: this._header.getHeaders() });
  }

  getAlumnus(id: string) {
    return this._http.get(`${baseURL}/Alumni/${id}`, { headers: this._header.getHeaders() });
  }
}
