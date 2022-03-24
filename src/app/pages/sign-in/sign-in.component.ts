/**
 * Title: sign-in.component.ts
 * Author: Gunner Bradley
 * Date: February 19th 2022
 * Description: sign in configuration
 */
import { Component, OnInit } from '@angular/core';
import { SignInService } from '../../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {
    console.log(this.cookieService.get('session_user'));
   }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      employeeId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    })
  }

  get form() { return this.signinForm.controls; }

  onSubmit() {
    const formValues = this.signinForm.value;
    const employeeId = parseInt(formValues.employeeId);

    if (this.signinService.validate(employeeId)) {
      this.cookieService.set('session_user', employeeId.toString(), 1)
      this.router.navigate(['/'])
    } else {
      this.errorMessage = `The employee ID you entered is invalid, please try again.`;
    }
  }
}
