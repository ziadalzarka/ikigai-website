import { trigger, animate, style, transition, state } from '@angular/animations';

export const fabTransition = trigger('fabTransition', [
	state('*', style({
		transform: 'scale(0)'
	})),
	state('show', style({
		transform: 'scale(1)'
	})),
	transition('* => show', animate('0.1s ease-in')),
	transition('show => *', animate('0.1s ease-out'))
]);
