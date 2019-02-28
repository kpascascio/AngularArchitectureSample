import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  loginMode = false;

  constructor() { }

  ngOnInit() {
  }

  registerToggle() {
    this.registerMode = true;
  }

  loginToggle() {
    this.loginMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
  cancelLoginMode(loginMode: boolean) {
    this.registerMode = loginMode;
  }
}
