import * as express from 'express';
import * as path from 'path';
import * as url from 'url';

export default express.Router()
	.use(express.static(path.join(__dirname, '../../../dist')))
	.get('/assets/*', (req, res) => {
		// remove query parameters for crawlers
		const noQuery = req.originalUrl.replace(/&.+/g, '');
		const filePath = path.join(__dirname, '../../../dist', noQuery);
		res.sendFile(filePath);
	})
	.use('/*', express.static(path.join(__dirname, '../../../dist')));
