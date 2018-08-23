import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GraphqlContactService } from './../graphql-contact.service';
import { GraphqlPostsService } from './../../dashboard/overview/content/graphql-posts.service';
import { PostsComponent } from './../../dashboard/overview/content/posts/posts.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { PublicContentService } from '@app/global/public-content.service';
import { SeoService } from '@app/seo.service';
import { NavigationService } from '@app/navigation.service';
import { AppState } from '@app/redux/app.state';
import { Store } from '@ngrx/store';
import { first } from 'rxjs/operators';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.pug',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent extends PostsComponent {

	content$;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private seoService: SeoService,
		private fb: FormBuilder,
		private contactService: GraphqlContactService,
		private modalService: NgbModal,
		navigationService: NavigationService,
		store: Store<AppState>,
		postsService: GraphqlPostsService,
		contentService: PublicContentService,
	) {
		super(navigationService, store, postsService);
		this.seoService.generateTags({});
		this.content$ = contentService.footer();
	}

	contactForm: FormGroup = this.fb.group({
		name: '',
		phoneNumber: '',
		email: '',
		question: '',
	});

	get name() {
		return this.contactForm.get('name');
	}

	get email() {
		return this.contactForm.get('email');
	}

	get question() {
		return this.contactForm.get('question');
	}

	showPost({ id }) {
		this.router.navigate(['post', id]);
	}

	newTab(socialWebsite) {
		this.content$.pipe(first()).subscribe((content) => {
			window.open(content[socialWebsite], '_blank');
		});
	}

	@ViewChild('successful') submissionSuccessful;
	@ViewChild('failed') submissionFailed;

	sendContact() {
		this.contactForm.updateValueAndValidity();
		this.name.markAsDirty();
		this.email.markAsDirty();
		this.question.markAsDirty();
		if (this.contactForm.invalid) return;

		this.contactService.send(this.contactForm.value).toPromise()
			.then(() => this.modalService.open(this.submissionSuccessful))
			.catch(() => this.modalService.open(this.submissionFailed));
	}
}
