export const froalaPlugins =
	[
		'align',
		'charCounter',
		'codeBeautifier',
		'codeView',
		'colors',
		'draggable',
		'embedly',
		'emoticons',
		'entities',
		'file',
		'fontFamily',
		'fontSize',
		'fullscreen',
		'image',
		// 'imageManager',
		// 'inlineStyle',
		'lineBreaker',
		'link',
		'lists',
		'paragraphFormat',
		'paragraphStyle',
		'quickInsert',
		'quote',
		'save',
		'table',
		'url',
		'video',
		'wordPaste'];

export const loading = {
	loading: true,
	failed: false
};

export const failed = {
	loading: false,
	failed: true
};

export const idle = {
	loading: false,
	failed: false
};

export function clearHeaders(input: string) {
	const regex = /<\/?h[1-6]>/g;
	return input.replace(regex, '');
}