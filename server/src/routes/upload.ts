import * as express from 'express';
import * as path from 'path';

const drive = process.env.VOLUME;

const failed = JSON.stringify({ ok: false });
const success = JSON.stringify({ ok: true });

export default express.Router()
	.use('/upload', (req, res) => {
		if (!req['files']) {
			return res.status(400).send(failed);
		}
		const sampleFile = req['files'].thumbnail;
		sampleFile.mv(path.join(drive, 'thumbnails', 'thumbnail.jpg'), (err) => {
			if (err) {
				return res.status(500).send(err);
			}
			res.send(JSON.stringify(success));
		});
	});
