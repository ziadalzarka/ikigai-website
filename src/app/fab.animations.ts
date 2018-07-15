import { trigger, animate, style, transition, state } from '@angular/animations';

export const fabTransition = trigger('fabTransition', [
	state('*', style({
		transform: 'scale(0)'
	})),
	state('users', style({
		transform: 'scale(1)'
	})),
	transition('* => users', animate('0.1s ease-in')),
	transition('users => *', animate('0.1s ease-out'))
]);
