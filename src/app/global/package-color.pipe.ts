import { Pipe, PipeTransform } from '@angular/core';
import { Package } from '@app/redux/enums/package.enum';

@Pipe({
	name: 'packageColor'
})
export class PackageColorPipe implements PipeTransform {

	transform(value: Package): string {
		switch (value) {
			case Package.Light:
				return 'text-danger';
			case Package.Pro:
				return 'text-warning';
			case Package.Enterprise:
				return 'text-success';
		}
	}

}
