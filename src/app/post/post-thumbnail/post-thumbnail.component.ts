import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-post-thumbnail',
	templateUrl: './post-thumbnail.component.pug',
	styleUrls: ['./post-thumbnail.component.scss']
})
export class PostThumbnailComponent implements OnInit {

	@Input('post') post;

	constructor() { }

	ngOnInit() {
	}

}
