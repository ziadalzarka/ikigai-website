import { HttpEventType, HttpEvent } from '@angular/common/http';

export const loading = {
	loading: true,
	failed: false
};

export const failed = {
	loading: false,
	failed: true
};

export const idle = {
	loading: false,
	failed: false
};

export function clearHeaders(input: string) {
	const regex = /<\/?h[1-6]>/g;
	return input.replace(regex, '');
}

export function getUploadPercentage(event: HttpEvent<any>) {
	switch (event.type) {
		case HttpEventType.UploadProgress:
			const percentDone = Math.round(100 * event.loaded / event.total);
			return percentDone;
	}
}