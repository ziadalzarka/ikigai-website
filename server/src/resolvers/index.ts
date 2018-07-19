import { clientApplicationMutation } from './Mutation/client-application';
import { jobApplicationMutation } from './Mutation/job-application';
import { postMutation } from './Mutation/post';
import { adminMutation } from './Mutation/admin';
import { authMutation } from './Mutation/auth';
import { applicationsQuery } from './Query/applications';
// import { Subscription } from './Subscription';
import { AuthPayload } from './AuthPayload';
import { me } from './Query/me';
import { publicContent } from './Query/public-content';
import { adminQuery } from './Query/admin';

export default {
	AuthPayload,
	Query: {
		...me,
		...publicContent,
		...applicationsQuery,
		...adminQuery
	},
	// Subscription,
	Mutation: {
		...authMutation,
		...adminMutation,
		...postMutation,
		...jobApplicationMutation,
		...clientApplicationMutation,
	},
};
