import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from '../../../shared/models/auth/loginUser';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login: LoginUser;

  constructor(private _formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.loginForm = this._formBuilder.group({
      username: new FormControl,
      password: new FormControl
    });
  }

  forgotPassword(){
    console.log("Test forgotPassword");
    this.router.navigate(['/forgotpassword']);
  };

  onSubmit() {
    this.login = this.loginForm.value;
    this.authService.login(this.login).subscribe(data => {
      console.log('Logged in successfully');
      console.log(data);
      this.router.navigate(['/']);
    }, error => {
      console.log('Failed to log in');
      console.log(error);
    });
  }
}
