import { JobPosition } from '@app/redux/enums/job-position.enum';

export interface JobApplication {
	id: string;
	name: string;
	phoneNumber: string;
	email: string;
	address: string;
	firstName: string;
	middleName: string;
	lastName: string;
	positions: JobPosition[];
	resume: File;
	linkedIn: string;
}
