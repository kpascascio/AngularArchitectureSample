import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { CourierService } from '../../../core/services/auth/courier.service';
import { RegisterUser } from '../../../shared/models/auth/registerUser';
import { LoginUser } from '../../../shared/models/auth/loginUser';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit {
  register: RegisterUser;
  login: LoginUser;
  registerForm: FormGroup;
  loading: boolean;

  constructor(private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _courier: CourierService) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.registerForm = this._formBuilder.group({
      username: new FormControl,
      email: new FormControl,
      password: new FormControl
    });
  }

  onSubmit() {
    this.register = this.registerForm.value;
    console.log(this.register);
    this.loading = true;
    this._authService.register(this.register).subscribe(() => {
      console.log('Registered successfully');
      this.login = {
        username: this.register.username,
        password: this.register.password
      };
      this._courier.changeEmail(this.register.email);
      this._authService.login(this.login).subscribe(data => {
        console.log('Logged in successfully');
        console.log(data);
        this.loading = false;
        this._router.navigate(['/']);
      }, error => {
        this.loading = false;
        console.log('Failed to log in');
        console.log(error);
      });
    }, error => {
      this.loading = false;
      console.log('Failed to register');
      console.log(error);
    });
  }
}
