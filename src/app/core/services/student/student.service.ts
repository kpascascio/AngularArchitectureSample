import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HeadersService } from '../../../shared/services/headers.service';
import { baseURL } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http: HttpClient, private _router: Router, private _header: HeadersService) { }

  getAllStudents() {
    return this._http.get(`${baseURL}/Student/GetAllStudents`, { headers: this._header.getHeaders() });
  }

  getStudent(id: string) {
    return this._http.get(`${baseURL}/Student/${id}`, {headers: this._header.getHeaders() });
  }
}
