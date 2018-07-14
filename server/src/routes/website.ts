import * as express from 'express';
import * as path from 'path';

export default express.Router()
	.use(express.static(path.join(__dirname, '../../../dist')))
	.use('/*', express.static(path.join(__dirname, '../../../dist')));
