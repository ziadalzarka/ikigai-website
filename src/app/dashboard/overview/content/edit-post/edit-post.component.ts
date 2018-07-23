import { UploadService } from '@app/global/upload.service';
import { AppState } from '@app/redux/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { froalaPlugins, clearHeaders } from 'utils/utils';
import { HttpRequest, HttpClient, HttpEventType, HttpEvent } from '@angular/common/http';
import { map, tap, last } from 'rxjs/operators';
import { PublishPost } from '@app/redux/actions/posts.actions';
import { environment } from 'environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-edit-post',
	templateUrl: './edit-post.component.pug',
	styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

	public editorContent: string = '';
	title = '<h1>New Post</h1>';
	thumbnailBody;

	public titleOptions = {
		toolbarInline: true,
		pluginsEnabled: [],
		htmlAllowedEmptyTags: ['h1'],
		htmlAllowedTags: ['h1'],
		wordDeniedTags: ['p'],
		placeholderText: null,
		toolbarContainer: '#empty',
	};

	public editorOptions = {
		pluginsEnabled: froalaPlugins,
		videoInsertButtons: ['videoBack', '|', 'videoByURL', 'videoEmbed'],
		inlineStyles: [],
		imageUploadURL: environment.uploadUrl,
		imageUploadMethod: 'POST',
		imageMaxSize: 1024 * 1024 * 2,
	};

	constructor(
		private http: HttpClient,
		private store: Store<AppState>,
		private uploadService: UploadService,
		private modalService: NgbModal,
	) { }

	ngOnInit() { }

	uploadPercentage = null;

	handleSelectAll(event) {
		if (event.ctrlKey) {
			if (event.keyCode == 65) {
				return false;
			}
		}
	}

	imgSrc;

	handleThumbnail(event) {
		if (event.target.files && event.target.files[0]) {
			const reader = new FileReader();
			reader.onload = (event: ProgressEvent) => {
				this.imgSrc = (<FileReader>event.target).result;
			};
			reader.readAsDataURL(event.target.files[0]);
		}
	}

	getPercentage(event: HttpEvent<any>) {
		switch (event.type) {
			case HttpEventType.UploadProgress:
				const percentDone = Math.round(100 * event.loaded / event.total);
				return percentDone;
		}
	}

	@ViewChild('loading') loading;

	async publish(thumbnailFile) {
		let thumbnailImageId;

		if (thumbnailFile) {
			this.modalService.open(this.loading, { size: 'lg' });
			thumbnailImageId = await this.uploadService.upload(thumbnailFile).pipe(
				tap(ev => { this.uploadPercentage = this.getPercentage(ev); }),
				last(),
				map((res: any) => res.body.id),
			).toPromise();
		}

		this.store.dispatch(new PublishPost({
			thumbnailImageId,
			title: clearHeaders(this.title),
			body: this.editorContent,
			thumbnailBody: this.thumbnailBody,
		}));
	}

}
