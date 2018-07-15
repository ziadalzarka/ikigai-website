import { trigger, animate, style, group, query, transition } from '@angular/animations';

export const initial = query(':enter, :leave', style({ position: 'absolute', width: '100%' }));

export function constructQuery(from, middle, to, dir = 'X') {
	return group([
		initial,
		query(':enter', [
			style({ transform: `translate${dir}(${from}%)` }),
			animate('0.5s ease-in-out', style({ transform: `translate${dir}(${middle}%)` }))
		]),
		query(':leave', [
			style({ transform: `translate${dir}(${middle}%)` }),
			animate('0.5s ease-in-out', style({ transform: `translate${dir}(${to}%)` }))
		])
	]);
}

export const swipeRight = constructQuery(100, 0, -100);
export const swipeLeft = constructQuery(-100, 0, 100);
export const swipeDown = constructQuery(-100, 0, 100, 'Y');
export const swipeUp = constructQuery(100, 0, -100, 'Y');

export const routerTransition = trigger('routerTransition', [
	/* home, client, work */
	transition('home => client', [swipeRight]),
	transition('client => home', [swipeLeft]),
	transition('home => work', [swipeLeft]),
	transition('work => home', [swipeRight]),
	transition('home => contact', [swipeDown]),
	transition('contact => home', [swipeUp]),

	/* settings: posts, clients, jobs, emails, footer */
	transition('users => emails, users => footer', [swipeUp]),
	transition('emails => footer', [swipeUp]),
	transition('emails => *', [swipeDown]),
	transition('footer => *', [swipeDown]),

]);
