import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreCmpComponent } from './core-cmp/core-cmp.component';
import { OtherCmpComponent } from './other-cmp/other-cmp.component';

const routes: Routes = [
  { path: '', component: CoreCmpComponent },
  { path: 'other-mp2', component: OtherCmpComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPage2RoutingModule { }
