import * as express from 'express';
import * as path from 'path';
import * as url from 'url';
import * as fetch from 'node-fetch';

const appUrl = process.env.APP_URL;
const renderUrl = process.env.RENDERTRON;

function generateUrl(request) {
	return url.format({
		protocol: request.protocol,
		host: appUrl,
		pathname: request.originalUrl
	});
}

const bots = [
	// crawler bots
	'googlebot',
	'yandexbot',
	'duckduckbot',
	'bingbot',
	'slurp',
	// link bots
	'W3C_Validator',
	'baiduspider',
	'embedly',
	'facebot',
	'facebookexternalhit',
	'linkedinbot',
	'outbrain',
	'pinterest',
	'quora link preview',
	'rogerbot',
	'showyoubot',
	'slackbot',
	'twitterbot',
	'vkShare',
];

function detectBot(userAgent) {

	const agent = userAgent.toLowerCase();

	for (const bot of bots) {
		if (agent.indexOf(bot) > -1) {
			console.log('detected bot', bot, agent);
			return true;
		}
	}
	console.log('no bots found');
	return false;
}

export default express.Router()
	.get('*', (req, res, next) => {

		const isBot = detectBot(req.headers['user-agent']);

		const botUrl = generateUrl(req);

		console.log(renderUrl);
		console.log(botUrl);
		console.log(`${renderUrl}/${botUrl}`);

		if (isBot) {
			fetch(`${renderUrl}/${botUrl}`)
				.then(res => res.text())
				.then(body => {

					// Set the Vary header to cache the user agent
					res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
					res.set('Vary', 'User-Agent');

					res.end(body.toString());

				});
		} else {
			next();
		}

	});
