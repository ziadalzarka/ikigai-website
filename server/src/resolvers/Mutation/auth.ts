import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Context } from '../../utils';

export const authMutation = {
	async login(parent, { username, password }, ctx: Context, info) {
		const user = await ctx.db.query.user({ where: { username } });
		if (!user) {
			throw new Error(`No such user found for username: ${username}`);
		}
		const valid = await bcrypt.compare(password, user.password);
		if (!valid) {
			throw new Error('Invalid password');
		}
		return {
			user,
			token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
		};
	},
};
