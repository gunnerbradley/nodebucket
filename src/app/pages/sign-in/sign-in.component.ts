// /**
//  * Title: sign-in.component.ts
//  * Author: Gunner Bradley
//  * Date: February 19th 2022
//  * Description: sign in configuration
//  */
// import { Component, OnInit } from '@angular/core';
// import { SignInService } from '../../sign-in.service';
// import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { CookieService } from 'ngx-cookie-service';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-sign-in',
//   templateUrl: './sign-in.component.html',
//   styleUrls: ['./sign-in.component.css']
// })
// export class SignInComponent implements OnInit {

//   signinForm: FormGroup;
//   errorMessage: string;

//   constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private http: HttpClient, private signinService: SignInService) {
//     console.log(this.cookieService.get('session_user'));
//    }

//   ngOnInit(): void {
//     this.signinForm = this.fb.group({
//       employeeId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
//     })
//   }



// //******

// // login(): void {
// //   const empId = this.signinForm.controls['empId'].value;

// //   this.http.get('api/employees/' + empId).subscribe(res => {
// //     if (res) {
// //       console.log(res);

// //       this.cookieService.set('session_user', empId, 1);

// //       this.router.navigate(['/'])
// //     }
// //     else{
// //       this.errorMessage = 'The employeeId you entered is not valid, please try again'
// //     }
// //   })
// // }

// //*******

//   get form() { return this.signinForm.controls; }

//   login() {
//     const formValues = this.signinForm.value;
//     const employeeId = parseInt(formValues.employeeId);

//     if (this.signinService.validate(employeeId)) {
//       this.cookieService.set('session_user', employeeId.toString(), 1)
//       this.router.navigate(['/'])
//     } else {
//       this.errorMessage = `The employee ID you entered is invalid, please try again.`;
//     }
//   }
// }




// ********************************



import { Component, OnInit, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SignInService } from '../../sign-in.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
	formModel: FormGroup;
  err: string;

	constructor(private router: Router, private cookieService: CookieService, private http: HttpClient, private signInService: SignInService) { }

	ngOnInit() {
		this.formModel = new FormGroup({
			employeeId: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^\d/)]))
		});
	}

	signIn() {
		let signInCheck: boolean;
		signInCheck = this.signInService.signInCheck();

		const employeeId = this.formModel.value.employeeId;

		if(signInCheck == false) {
			this.http.get(`/api/employee/${employeeId}`).subscribe((response: any) => {

				if(response) {
					this.cookieService.set('session_user', employeeId);
					this.cookieService.set('session_first_name', response.firstName);
					this.router.navigate(['/']);
				} else {
					this.err = 'The employee ID was not found.'
				}
			})
		} else {
			this.router.navigate(['/session/tasks']);
		}
	}
}
