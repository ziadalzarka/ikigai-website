import { trigger, animate, style, group, query, transition } from '@angular/animations';

export const initial = query(':enter, :leave', style({ position: 'absolute', width: '100%' }));

export function constructQuery(from, middle, to, dir = 'X') {
	return group([
		initial,
		query(':enter', [
			style({ transform: `translate${dir}(${from}%)`, opacity: 0 }),
			animate('0.5s ease-in-out', style({ transform: `translate${dir}(${middle}%)`, opacity: 1 }))
		]),
		query(':leave', [
			style({ transform: `translate${dir}(${middle}%)`, opacity: 1 }),
			animate('0.5s ease-in-out', style({ transform: `translate${dir}(${to}%)`, opacity: 0 }))
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

	/* posts, clients, jobs, users, emails, footer */
	// posts is at the top
	// transition('edit => posts', [swipeDown]),
	// transition('edit => *', [swipeUp]),
	transition('edit => *', [swipeDown]),
	transition('edit => *', [swipeUp]),
	transition('posts => *', [swipeUp]),
	// going down
	transition('emails => footer', [swipeUp]),
	transition('users => emails, users => footer', [swipeUp]),
	transition('jobs => users, jobs => emails, jobs => footer', [swipeUp]),
	transition('clients => jobs, clients => users, clients => emails, clients => footer', [swipeUp]),
	// going up
	transition('clients => *', [swipeDown]),
	transition('jobs => *', [swipeDown]),
	transition('users => *', [swipeDown]),
	transition('emails => *', [swipeDown]),
	transition('footer => *', [swipeDown]),

]);
