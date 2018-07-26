import { PermissionError } from './../../utils';
import { Context, Permissions, verifyPermission } from '../../utils';
import { UserWhereInput } from '../../generated/prisma';

export const adminQuery = {
	async usersConnection(parent, args, ctx: Context, info) {
		const id = await verifyPermission(ctx, Permissions.Admin);
		return ctx.db.query.usersConnection({
			...args,
			where: <UserWhereInput>{ id_not: id }
		}, info);
	},
};
