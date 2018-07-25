import { environment } from 'environments/environment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-post-thumbnail',
	templateUrl: './post-thumbnail.component.pug',
	styleUrls: ['./post-thumbnail.component.scss']
})
export class PostThumbnailComponent implements OnInit {

	@Input() post;
	@Input() options: boolean;
	@Output() open: EventEmitter<any> = new EventEmitter();
	@Output() option: EventEmitter<any> = new EventEmitter();

	storage = environment.storage;

	constructor() { }

	ngOnInit() {
	}

	emit() {
		this.open.emit();
	}

	emitOption(name) {
		this.option.emit(name);
	}

}
