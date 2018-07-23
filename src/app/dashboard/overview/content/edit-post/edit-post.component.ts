import { UploadService } from '@app/global/upload.service';
import { AppState } from '@app/redux/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { froalaPlugins } from 'utils/utils';
import { HttpRequest, HttpClient, HttpEventType, HttpEvent } from '@angular/common/http';
import { map, tap, last } from 'rxjs/operators';
import { PublishPost } from '@app/redux/actions/posts.actions';
import { environment } from 'environments/environment';

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
		imageUploadURL: environment.uploadUrl,
		imageUploadMethod: 'POST',
		imageMaxSize: 1024 * 1024 * 2,
		imageUploadParams: {
			thing: 'fewafe'
		},
		events: {
			'froalaEditor.image.beforeUpload': (e, editor, images) => {
				console.log('hi before shit happens');
			}
		}
	};

	public editorOptions = {
		videoInsertButtons: ['videoBack', '|', 'videoByURL', 'videoEmbed'],
		inlineStyles: []
	};

	constructor(
		private http: HttpClient,
		private store: Store<AppState>,
		private uploadService: UploadService
	) { }

	ngOnInit() { }

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

	async publish(thumbnailFile) {
		let thumbnailImageId;

		if (thumbnailFile) {
			thumbnailImageId = await this.uploadService.upload(thumbnailFile);
		}

		this.store.dispatch(new PublishPost({
			thumbnailImageId,
			title: this.title,
			body: this.editorContent,
			thumbnailBody: this.thumbnailBody,
		}));
	}

}
