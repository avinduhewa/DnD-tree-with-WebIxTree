import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CoreCompComponent } from './core-comp/core-comp.component';
import { OtherCompComponent } from './other-comp/other-comp.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    CoreCompComponent,
    OtherCompComponent
  ]
})
export class DashboardModule { }
