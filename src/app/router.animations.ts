import { trigger, animate, style, group, query, transition } from '@angular/animations';

const initial = query(':enter, :leave', style({ position: 'fixed', width: '100%' }));

function constructQuery(from, middle, to) {
	return group([
		initial,
		query(':enter', [
			style({ transform: `translateX(${from}%)` }),
			animate('0.5s ease-in-out', style({ transform: `translateX(${middle}%)` }))
		]),
		query(':leave', [
			style({ transform: `translateX(${middle}%)` }),
			animate('0.5s ease-in-out', style({ transform: `translateX(${to}%)` }))
		])
	]);
}

const swipeRight = constructQuery(100, 0, -100);
const swipeLeft = constructQuery(-100, 0, 100);

export const routerTransition = trigger('routerTransition', [
	transition('home => client', [swipeRight]),
	transition('client => home', [swipeLeft]),
	transition('home => work', [swipeLeft]),
	transition('work => home', [swipeRight]),
]);
