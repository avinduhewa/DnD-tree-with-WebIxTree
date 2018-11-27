import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';

import { SecureComponent } from './secure.component';

import { NavBarModule } from './shared/nav-bar/nav-bar.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DataTableComponent } from './data-table/data-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    SecureRoutingModule,
    NavBarModule,
    DashboardModule,
    NgxDatatableModule
  ],
  declarations: [
    SecureComponent,
    DataTableComponent

  ]
})
export class SecureModule { }
