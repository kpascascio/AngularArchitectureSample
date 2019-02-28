import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeadersService } from '../../../shared/services/headers.service';
import { baseURL } from '../../../../environments/environment.prod';
import { Assignment } from '../../../shared/models/assignment/assignment';
import { mockAssignmentDataObservable } from '../../mocks/shared/assignment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private _http: HttpClient, private _header: HeadersService) { }

  getAllAssignments(): Observable<Assignment> {
    return this._http.get<Assignment>(`${baseURL}/Assignment/GetAllAssignments`, { headers: this._header.getHeaders() });
  }

  getAllPreworkAssignments(): Observable<Assignment> {
    return this._http.get<Assignment>(`${baseURL}/prework/getprework`, { headers: this._header.getHeaders() });
  }

  getAssignment(id: string): Observable<Assignment> {
    return this._http.get<Assignment>(`${baseURL}/Assignment/${id}`, { headers: this._header.getHeaders() });
  }

  createAssignment(assignment: Assignment): Observable<Assignment> {
    return this._http.post<Assignment>(`${baseURL}/Assignment/CreateAssignment`, assignment, { headers: this._header.getHeaders() });
  }

  createPreworkAssignment(assignment: Assignment): Observable<Assignment> {
    return this._http.post<Assignment>(`${baseURL}/Prework/post`, assignment, { headers: this._header.getHeaders() });
  }

  getAllPreWorkAssignmentsMock(): Observable<Assignment> {
    /*
     want to send a request like ${baseURL}/Assignment/GetAllAssignments?badge=white`
    */
    return new Observable(mockAssignmentDataObservable);
  }
}
