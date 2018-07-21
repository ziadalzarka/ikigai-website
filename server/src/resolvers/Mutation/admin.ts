import { Permissions } from './../../utils';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Context, verifyPermission } from '../../utils';

export const adminMutation = {
	async addUser(parent, args, ctx: Context, info) {
		await verifyPermission(ctx, Permissions.Admin).catch(err => { throw err; });

		const password = await bcrypt.hash(args.password, 10);
		const user = await ctx.db.mutation.createUser({
			data: {
				...args,
				password,
				permissions: {
					set: args.permissions
				}
			},
		});

		return {
			user,
			token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
		};
	},

	async changeUserPermissions(parent, { id, permissions }, ctx: Context, info) {
		await verifyPermission(ctx, Permissions.Admin).catch(err => { throw err; });
		return ctx.db.mutation.updateUser({
			where: { id },
			data: {
				permissions: {
					set: permissions
				}
			}
		}, info);
	},

	async loginAs(parent, { id }, ctx: Context, info) {
		await verifyPermission(ctx, Permissions.Admin).catch(err => { throw err; });
		ctx.db.mutation.updateUser({
			where: { id }, data: {
				lastLogin: new Date()
			}
		});
		return {
			token: jwt.sign({ userId: id }, process.env.APP_SECRET),
		};
	},

	async deleteUser(parent, { id }, ctx: Context, info) {
		await verifyPermission(ctx, Permissions.Admin).catch(err => { throw err; });
		return ctx.db.mutation.deleteUser({ where: { id } }, info);
	},
};
