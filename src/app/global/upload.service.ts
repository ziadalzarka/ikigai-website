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

		return this.http.request(req);
	}

	getUploadId(file) {
		this.upload(file).pipe(
			last(),
			map((res: any) => res.body.id),
		);
	}
}
