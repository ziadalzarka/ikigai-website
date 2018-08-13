import * as express from 'express';
import * as path from 'path';

export default express.Router()
	.get('/sitemap.xml', (req, res) => {
		res.sendFile(path.join(__dirname, '../sitemap.xml'));
	});
