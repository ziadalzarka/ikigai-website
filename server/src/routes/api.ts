import * as express from 'express';

export default express.Router()
	.use('/api', (_, res) => {
		res.end('hello world!');
	});
