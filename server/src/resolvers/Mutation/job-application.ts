import { Context } from '../../utils';

export const jobApplicationMutation = {
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
			console.log(resumeFileId);
		console.log({
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
		});
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
