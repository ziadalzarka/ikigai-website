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

}
