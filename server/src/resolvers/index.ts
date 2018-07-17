import { Query } from './Query';
import { Subscription } from './Subscription';
import { auth } from './Mutation/auth';
import { post } from './Mutation/post';
import { AuthPayload } from './AuthPayload';

export default {
	Query,
	// Subscription,
	AuthPayload,
	Mutation: {
		...auth,
		...post,
	},
};
