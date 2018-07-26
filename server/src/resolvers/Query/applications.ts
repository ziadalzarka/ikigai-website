import { Context, Permissions, verifyPermission } from '../../utils';
import { ClientApplicationOrderByInput, JobApplicationOrderByInput } from '../../generated/prisma';

export const applicationsQuery = {
	async jobApplicationsConnection(parent, args, ctx: Context, info) {
		await verifyPermission(ctx, Permissions.JobApplications);
		return ctx.db.query.jobApplicationsConnection(args, info);
	},

	async clientApplicationsConnection(parent, args, ctx: Context, info) {
		await verifyPermission(ctx, Permissions.ClientApplications);
		return ctx.db.query.clientApplicationsConnection(args, info);
	},

	async clientApplication(parent, { id }, ctx: Context, info) {
		await verifyPermission(ctx, Permissions.ClientApplications);
		return ctx.db.query.clientApplication({ where: { id } }, info);
	},

	async jobApplication(parent, { id }, ctx: Context, info) {
		await verifyPermission(ctx, Permissions.JobApplications);
		return ctx.db.query.jobApplications({ where: { id } }, info);
	},
};
