import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreCompComponent } from './core-comp/core-comp.component';
import { OtherCompComponent } from './other-comp/other-comp.component';

const routes: Routes = [
  { path: '', component: CoreCompComponent },
  { path: 'other', component: OtherCompComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
