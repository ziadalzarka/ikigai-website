import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { JobsComponent } from './jobs/jobs.component';
import { ClientsComponent } from './clients/clients.component';

@NgModule({
  imports: [
    CommonModule,
    ApplicationsRoutingModule
  ],
  declarations: [JobsComponent, ClientsComponent]
})
export class ApplicationsModule { }
