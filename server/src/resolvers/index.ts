import { Query } from './Query';
// import { Subscription } from './Subscription';
import { auth } from './Mutation/auth';
import { post } from './Mutation/post';
import { AuthPayload } from './AuthPayload';
import { jobApplication } from './Mutation/job-application';
import { clientApplication } from './Mutation/client-application';

export default {
	Query,
	// Subscription,
	AuthPayload,
	Mutation: {
		...auth,
		...post,
		...jobApplication,
		...clientApplication
	},
};
