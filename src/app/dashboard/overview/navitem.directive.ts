import { Directive, ElementRef, Input, HostBinding, OnChanges, Renderer2 } from '@angular/core';

@Directive({
	selector: '[navitem]'
})
export class NavitemDirective {
	@HostBinding('class') class;
	@Input('navitem') exp: boolean;

	constructor(public el: ElementRef, private renderer: Renderer2) {
		this.setClasses();
	}

	setClasses() {
		this.class += ['',
			'w-100',
			'btn',
			'btn',
			'text-pale',
			'shadow-none',
			'bg-dashboard'].join(' ');
	}
}
