import { TestBed, async, inject } from '@angular/core/testing';

import { OverviewGuard } from '@app/dashboard/overview.guard';

describe('DashboardGuard', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [OverviewGuard]
		});
	});

	it('should ...', inject([OverviewGuard], (guard: OverviewGuard) => {
		expect(guard).toBeTruthy();
	}));
});
