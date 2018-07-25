import { HttpEventType, HttpEvent } from '@angular/common/http';

export const idle = {
	loading: false,
	failed: false,
	success: false,
};

export const loading = {
	loading: true,
	failed: false,
	success: false,
};

export const failed = {
	loading: false,
	failed: true,
	success: false,
};

export const success = {
	loading: false,
	failed: false,
	success: true,
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