import { Pipe, PipeTransform } from '@angular/core';
import { JobPosition } from '@app/redux/enums/job-position.enum';

@Pipe({
	name: 'positions'
})
export class PositionsPipe implements PipeTransform {

	transform(value: JobPosition[], args?: any): any {
		const mappings = {
			[JobPosition.Photography]: 'Photography',
			[JobPosition.Graphics]: 'Graphics',
			[JobPosition.Media]: 'Media',
			[JobPosition.PublicRelations]: 'Public Relations',
		};

		return value.map(position => mappings[position.toString()]).join(', ');
	}

}
