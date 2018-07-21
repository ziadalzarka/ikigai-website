import { JobPosition } from '@app/redux/enums/job-position.enum';

export interface JobApplication {
	id: string;
	email: string;
	address: string;
	phoneNumber: string;
	firstName: string;
	middleName: string;
	lastName: string;
	positions: JobPosition[];
	resumeFileId: string;
	linkedIn: string;
}
