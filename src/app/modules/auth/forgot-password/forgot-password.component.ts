import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent implements OnInit {
  validationMessages = {
    'email': [
      {
        type: 'required', message: 'Please enter E-mail'
      },
      {
        type: 'email', message: 'Not a valid E-mail'
      }
    ],
    'confirmEmail': [
      {
        type: 'required', message: 'Please enter E-mail'
      },
      {
        type: 'email', message: 'Not a valid E-mail'
      }
    ],
  };
  forgotPasswordForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.forgotPasswordForm = fb.group({
      'email': [null, [Validators.required, Validators.email]],
      'confirmEmail': [null, [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.forgotPassword(this.forgotPasswordForm.value).subscribe((user: any) => {
      console.log('Application success!');
      this.router.navigate(['/']);
    });
  }
}
