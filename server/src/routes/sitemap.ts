import * as express from 'express';
import * as path from 'path';

export default express.Router()
	.get('/sitemap.xml', express.static(path.join(__dirname, '../sitemap.xml')));
