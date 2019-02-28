import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendlyService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'https://calendly.com/api/v1';
  }

  getEvents() {
    return this.http.get(`${this.url}/users/me/events?include=invitee`);
  }
}
