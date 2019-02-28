import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HeadersService } from '../../../shared/services/headers.service';
import { baseURL } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _http: HttpClient,
    private _router: Router,
    private _headers: HeadersService) { }

  getProfile(id: string) {
    return this._http.get(`${baseURL}/Profile/${id}`, { headers: this._headers.getHeaders() });
  }
}
