import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

export interface MetaConfig {
	title: string;
	description: string;
	image: string;
}

@Injectable({
	providedIn: 'root'
})
export class SeoService {

	constructor(private meta: Meta) {

	}

	generateTags(config: Partial<MetaConfig>) {

		// default values
		config = {
			title: 'Ikigai',
			description: 'For digital marketing and media services',
			image: 'http://194.182.77.249:8090/assets/images/header.png',
			...config
		}

		this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
		this.meta.updateTag({ name: 'twitter:site', content: '@ikigai' });
		this.meta.updateTag({ name: 'twitter:title', content: config.title });
		this.meta.updateTag({ name: 'twitter:description', content: config.description });
		this.meta.updateTag({ name: 'twitter:image', content: config.image });

		this.meta.updateTag({ property: 'og:type', content: 'article' });
		this.meta.updateTag({ property: 'og:site_name', content: 'Ikigai' });
		this.meta.updateTag({ property: 'og:title', content: config.title });
		this.meta.updateTag({ property: 'og:description', content: config.description });
		this.meta.updateTag({ property: 'og:image', content: config.image });
		this.meta.updateTag({ property: 'og:url', content: `http://194.182.77.249:8090` });
	}
}