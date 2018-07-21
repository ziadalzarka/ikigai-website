import * as express from 'express';
import * as path from 'path';
import * as shortid from 'shortid';
import fetch from 'node-fetch';

const drive = process.env.VOLUME || 'storage';
const endpoint = 'http://localhost:4090';
const failed = { ok: false };
const success = { ok: true };

const meQuery = `
{
	me {
		id
	}
}
`;

function sendAuthRequest(req) {
	return fetch(endpoint, {
		method: 'POST',
		headers: {
			Authorization: req.headers.authorization,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			operationName: null,
			query: meQuery,
			variables: {}
		})
	})
		.then(res => res.json())
		.then(json => json.data.me)
		.then(me => {
			if (!me) throw new Error('Not Authorized');
			return me;
		});
}

export default express.Router()
	.use('/upload', (req, res) => {
		sendAuthRequest(req)
			.then(me => {

				if (!req['files']) {
					return res.status(400).send(JSON.stringify(failed));
				}

				const file = req['files'].file;

				const id = shortid.generate();

				file.mv(path.join(drive, 'files', id), (err) => {
					if (err) {
						return res.status(500).send(err);
					}
					res.send(JSON.stringify({ ...success, id }));
				});

			})
			.catch(err => res.status(500).send());
	});
