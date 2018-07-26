import { PublicContentService } from './../../../../global/public-content.service';
import { ActivatedRoute } from '@angular/router';
import { UploadService } from '@app/global/upload.service';
import { AppState } from '@app/redux/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { clearHeaders, getUploadPercentage } from 'utils/utils';
import { HttpRequest, HttpClient, HttpEventType, HttpEvent } from '@angular/common/http';
import { map, tap, last } from 'rxjs/operators';
import { PublishPost, UpdatePost, Reset, Loading } from '@app/redux/actions/posts.actions';
import { environment } from 'environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as fromPosts from '@app/redux/reducers/posts.reducer';

@Component({
	selector: 'app-edit-post',
	templateUrl: './edit-post.component.pug',
	styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

	constructor(
		private http: HttpClient,
		private store: Store<AppState>,
		private uploadService: UploadService,
		private modalService: NgbModal,
		private route: ActivatedRoute,
		private publicContent: PublicContentService,
	) { }

	ready = false;
	editing = false;

	id = null;
	public editorContent: string = '';
	title = 'Untitled';
	thumbnailBody = 'Every post needs to have a thumbnail body';
	badge;
	badgeColorClass = 'dashboard';
	imgSrc;

	loading;
	failed;
	success;

	ngOnInit() {
		this.loading = this.store.select(fromPosts.selectLoading);
		this.failed = this.store.select(fromPosts.selectFailed);
		this.success = this.store.select(fromPosts.selectSuccess);

		this.route.params.subscribe(async ({ id }) => {
			if (id) {
				this.id = id;

				const {
					title,
					badge,
					badgeColorClass,
					thumbnailBody,
					thumbnailImageId,
					body
				} = await this.publicContent.post(id).toPromise();

				this.title = title;
				this.badge = badge;
				this.badgeColorClass = badgeColorClass;
				this.thumbnailBody = thumbnailBody;
				this.editorContent = body;
				this.imgSrc = `${environment.storage}/${thumbnailImageId}`;

				this.ready = true;
				this.editing = true;
			} else {
				this.ready = true;
				this.editing = false;
			}
		});
	}

	uploadPercentage = 100;

	handleThumbnail(event) {
		if (event.target.files && event.target.files[0]) {
			const reader = new FileReader();
			reader.onload = (event: ProgressEvent) => {
				this.imgSrc = (<FileReader>event.target).result;
			};
			reader.readAsDataURL(event.target.files[0]);
		}
	}

	@ViewChild('loadingModal') loadingModal;

	async publish(thumbnailFile) {

		if (!this.title || !this.thumbnailBody) {
			return;
		}

		let thumbnailImageId;

		this.store.dispatch(new Loading());

		this.modalService.open(this.loadingModal, { size: 'lg' });

		if (thumbnailFile) {
			thumbnailImageId = await this.uploadService.upload(thumbnailFile).pipe(
				tap(ev => { this.uploadPercentage = getUploadPercentage(ev); }),
				last(),
				map((res: any) => res.body.id),
			).toPromise();
		}

		const payload = {
			thumbnailImageId,
			badge: this.badge,
			badgeColorClass: this.badgeColorClass,
			title: clearHeaders(this.title),
			body: this.editorContent,
			thumbnailBody: this.thumbnailBody,
		};

		if (this.editing) this.store.dispatch(new UpdatePost({ id: this.id, post: payload }));
		else this.store.dispatch(new PublishPost(payload));
	}

}
