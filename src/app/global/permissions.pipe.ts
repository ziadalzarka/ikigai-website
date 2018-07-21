import { Pipe, PipeTransform } from '@angular/core';
import { Permissions } from '@app/redux/enums/permission.enum';

@Pipe({
	name: 'permissions'
})
export class PermissionsPipe implements PipeTransform {

	transform(value: Permissions[]): string {
		if (value.includes(Permissions.Admin)) {
			return 'Admin';
		}

		const mappings = {
			[Permissions.Posts]: 'Posts',
			[Permissions.ClientApplications]: 'Client Applications',
			[Permissions.JobApplications]: 'Job Applications',
			[Permissions.ContactApplications]: 'Contact Applications',
		};

		return value.map(permit => mappings[permit.toString()]).join(', ');
	}

}
