import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpEvent, HttpEventType, HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, last } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class UploadService {

	constructor(private http: HttpClient) { }

	upload(file) {
		const input = new FormData();
		input.append('file', file);

		const headers = new HttpHeaders({
			Authorization: 'Bearer ' + localStorage.getItem('token')
		});

		const req = new HttpRequest('POST', environment.uploadUrl, input, {
			headers,
			reportProgress: true
		});

		// The `HttpClient.request` API produces a raw event stream
		// which includes start (sent), progress, and response events.
		this.http.request(req).pipe(
			map(ev => this.getEventMessage(ev, file)),
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
