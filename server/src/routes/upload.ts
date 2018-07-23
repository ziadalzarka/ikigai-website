import * as express from 'express';
import * as path from 'path';
import { sync } from 'mkdirp';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const drive = process.env.VOLUME || 'storage';

const client = new ApolloClient({
	uri: 'http://localhost:4090'
});

const createEntryMutation = gql`
	mutation ($name: String!, $checksum: String!) {
		createFileEntry(name: $name, checksum: $checksum) {
			id
		}
	}
`;

sync(path.join(drive, 'files'));

const failed = { ok: false };
const success = { ok: true };

export default express.Router()
	.use('/storage', express.static(path.join(drive, 'files')))
	.use('/upload', (req, res) => {

		if (!req['files']) {
			return res.status(400).send(JSON.stringify(failed));
		}

		console.log('request:--');
		console.log(req.body);

		const file = req['files'].file;

		const saveFile = (id) => {
			file.mv(path.join(drive, 'files', id), (err) => {
				if (err) {
					return res.status(500).send(err);
				}
				res.send(JSON.stringify({ ...success, id, link: '/storage/' + id }));
			});
		};

		createEntry(file).then(id => {
			saveFile(id);
		}).catch(err => res.status(500).send());
	});

function createEntry({ name, md5 }): Promise<string> {
	return client.mutate({
		mutation: createEntryMutation,
		variables: { name, checksum: md5 }
	}).then(res => res.data.createFileEntry.id);
}
