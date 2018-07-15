import { Component, OnInit } from '@angular/core';
import { froalaPlugins } from 'utils/utils';

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

	constructor() { }

	ngOnInit() {
	}

	disableSelectAll(event) {
		if (event.ctrlKey) {
			if (event.keyCode == 65) {
				return false;
			}
		}
		console.log(this.editorContent);
	}

}
