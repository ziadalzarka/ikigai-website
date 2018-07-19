import * as jwt from 'jsonwebtoken';
import { createError } from 'apollo-errors';
import { Prisma } from './generated/prisma';

export class Permissions {
	static Admin = 'Admin';
	static Posts = 'Posts';
	static JobApplications = 'JobApplications';
	static ClientApplications = 'ClientApplications';
	static ContactApplications = 'ContactApplications';
}

export interface Context {
	db: Prisma;
	request: any;
}

export function getUserId(ctx: Context) {
	const Authorization = ctx.request.get('Authorization');
	if (Authorization) {
		const token = Authorization.replace('Bearer ', '');
		const { userId } = jwt.verify(token, process.env.APP_SECRET) as { userId: string };
		return userId;
	}

	throw new AuthError();
}

export function hasPermission(permissions, permit) {
	return permissions.indexOf('Admin') > -1 ? true : permissions.indexOf(permit) > -1;
}

export async function verifyPermission(ctx: Context, permit) {
	const id = getUserId(ctx);

	await ctx.db.query.user({ where: { id } }, '{ permissions }').then(user => {
		if (!user || !hasPermission(user.permissions, permit)) {
			throw new PermissionError();
		}
	}).catch(err => { throw err; });

	return id;
}

export const AuthError = createError('AuthError', {
	message: 'The provided token is invalid.'
});

export const PermissionError = createError('PermissionError', {
	message: 'Operation not permitted.'
});
