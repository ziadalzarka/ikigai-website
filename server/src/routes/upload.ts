import * as express from 'express';
import * as path from 'path';
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

const failed = { ok: false };
const success = { ok: true };

export default express.Router()
	.use('/upload', (req, res) => {

		if (!req['files']) {
			return res.status(400).send(JSON.stringify(failed));
		}

		const file = req['files'].file;

		const saveFile = (id) => {
			file.mv(path.join(drive, 'files', id), (err) => {
				if (err) {
					return res.status(500).send(err);
				}
				res.send(JSON.stringify({ ...success, id }));
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
