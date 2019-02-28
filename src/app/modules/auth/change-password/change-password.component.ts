import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  validationMessages = {
    'password': [
      {
        type: 'required', message: 'Please enter password'
      },
    ],
    'confirmPassword': [
      {
        type: 'required', message: 'Please confirm password'
      }
    ]
  }
  
  changePasswordForm: FormGroup;
  constructor(private fb: FormBuilder, ) {
    this.changePasswordForm = fb.group({
      'password': [null, [Validators.required, ]],
      'confirmPassword': [null, [Validators.required,]]
    });
   }

  ngOnInit() {
    
  }

  onSubmit(){
    email: this.changePasswordForm.value
  }
}
