import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourierService {

  private emailSource = new BehaviorSubject('default email');
  currentEmail = this.emailSource.asObservable();

  constructor() { }

  changeEmail(email: string) {
    this.emailSource.next(email);
  }
}
