import { SafeHtmlPipe } from './safehtml.pipe';

describe('SafehtmlPipe', () => {
	it('create an instance', () => {
		const pipe = new SafeHtmlPipe();
		expect(pipe).toBeTruthy();
	});
});
