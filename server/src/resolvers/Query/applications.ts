import { Context, Permissions, verifyPermission } from '../../utils';

export const applicationsQuery = {
	async jobApplicationsConnection(parent, args, ctx: Context, info) {
		await verifyPermission(ctx, Permissions.JobApplications);
		return ctx.db.query.jobApplicationsConnection(args, info);
	},

	async clientApplicationsConnection(parent, args, ctx: Context, info) {
		await verifyPermission(ctx, Permissions.ClientApplications);
		return ctx.db.query.clientApplicationsConnection(args, info);
	},
};
