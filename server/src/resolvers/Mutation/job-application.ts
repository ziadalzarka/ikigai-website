import { Context } from '../../utils';

export const jobApplication = {
	async applyForWork(parent, {
		email,
		address,
		phoneNumber,
		firstName,
		middleName,
		lastName,
		positions,
		resumeFileId,
		linkedIn }, ctx: Context, info) {
		return ctx.db.mutation.createJobApplication(
			{
				data: {
					email,
					address,
					phoneNumber,
					// ------------
					firstName,
					middleName,
					lastName,
					linkedIn,
					positions: {
						set: positions
					},
					...resumeFileId && {
						resume: {
							connect: { id: resumeFileId }
						}
					},
					name: `${firstName} ${middleName} ${lastName}`,
				},
			},
			info
		);
	},
};
