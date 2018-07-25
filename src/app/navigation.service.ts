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

	notFound() {
		this.router.navigate(['404']);
	}

	posts() {
		this.router.navigate(['dashboard', 'content', 'posts']);
	}

	editPost(id) {
		this.router.navigate(['dashboard', 'content', 'edit', id]);
	}

	home() {
		this.router.navigate(['home']);
	}
}
