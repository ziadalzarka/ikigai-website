import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { froalaPlugins } from 'utils/utils';
import { HttpRequest, HttpClient, HttpEventType, HttpEvent } from '@angular/common/http';
import { map, tap, last } from 'rxjs/operators';

@Component({
	selector: 'app-edit-post',
	templateUrl: './edit-post.component.pug',
	styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
	public editorContent: string = '';

	public titleOptions = {
		toolbarInline: true,
		pluginsEnabled: [],
		htmlAllowedEmptyTags: ['h1'],
		htmlAllowedTags: ['h1'],
		wordDeniedTags: ['p'],
		placeholderText: null,
		toolbarContainer: '#empty'
	};

	public editorOptions = {
		videoInsertButtons: ['videoBack', '|', 'videoByURL', 'videoEmbed'],
		inlineStyles: []
	};

	imgSrc;

	constructor(private http: HttpClient) { }

	ngOnInit() { }

	handleSelectAll(event, input) {
		if (event.ctrlKey) {
			if (event.keyCode == 65) {
				return false;
			}
		}
	}

	handleThumbnail(event: any) {
		if (event.target.files && event.target.files[0]) {
			const reader = new FileReader();
			reader.onload = (event: ProgressEvent) => {
				this.imgSrc = (<FileReader>event.target).result;
			}
			reader.readAsDataURL(event.target.files[0]);
		}

		const input = new FormData();
		input.append('thumbnail', event.target.files[0]);

		const req = new HttpRequest('POST', 'http://127.0.0.1:8090/upload', input, {
			reportProgress: true
		});

		console.log(req);

		// The `HttpClient.request` API produces a raw event stream
		// which includes start (sent), progress, and response events.
		this.http.request(req).pipe(
			map(ev => this.getEventMessage(ev, event.target.files[0])),
			tap(message => console.log(message)),
			last(), // return last (completed) message to caller
		).subscribe(thing => {
			console.log('thing');
			console.log(thing);
		});
	}

	private getEventMessage(event: HttpEvent<any>, file: File) {
		console.log('got event');
		switch (event.type) {
			case HttpEventType.Sent:
				return `Uploading file "${file.name}" of size ${file.size}.`;

			case HttpEventType.UploadProgress:
				// Compute and show the % done:
				const percentDone = Math.round(100 * event.loaded / event.total);
				return `File "${file.name}" is ${percentDone}% uploaded.`;

			case HttpEventType.Response:
				return `File "${file.name}" was completely uploaded!`;

			default:
				return `File "${file.name}" surprising upload event: ${event.type}.`;
		}
	}
}
