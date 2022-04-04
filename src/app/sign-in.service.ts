import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// export class SignInService {

//   employeeIds: Array<number>;

//   constructor() {
//     this.employeeIds = [1007, 1008, 1009, 1010, 1011, 1012];
//   }

//   validate(employeeId: number) {
//     return this.employeeIds.some(id => id === employeeId);
//   }
// }

export class SignInService {

	constructor(private router: Router, private cookieService: CookieService, private http: HttpClient) {}

	/*
	 *  getSessionCookie()
	 *  Params: none
	 *  Response: string
	 *  Description: Returns the session_user cookie.
	 */
	public getSessionCookie(): string {
		const sessionUser = this.cookieService.get('session_user');
		if (sessionUser) {
			return sessionUser;
		} else {
			return null;
		}
	}

	/*
	 *  signInCheck()
	 *  Params: none
	 *  Response: Boolean
	 *  Description: Checks if a user has a session_user cookie.
	 */
	public signInCheck(): boolean {
		if (this.cookieService.get('session_user')) {
			return true;
		} else {
			return false;
		}
	}

	/*
	 *  signOut()
	 *  Params: none
	 *  Description: Removes the session_user cookie.
	 */
	public signOut() {
		// Properties
		let signedIn: string;
		signedIn = this.cookieService.get('session_user')

		if (signedIn) {
			this.cookieService.delete('session_user');
			this.cookieService.delete('session_first_name');
			this.router.navigate(['/session/signin']);
		}
	}

}
