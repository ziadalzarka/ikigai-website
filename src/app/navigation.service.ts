import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class NavigationService {

	constructor(private router: Router) { }

	login() {
		this.router.navigate(['dashboard', 'login']);
	}

	absoluteLogin() {
		window.location.href = '/dashboard/login';
	}

	dashboard() {
		this.router.navigate(['dashboard']);
	}

	posts() {
		this.router.navigate(['dashboard', 'content', 'posts']);
	}

	home() {
		this.router.navigate(['home']);
	}
}
