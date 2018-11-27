import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPage2RoutingModule } from './main-page2-routing.module';
import { CoreCmpComponent } from './core-cmp/core-cmp.component';
import { OtherCmpComponent } from './other-cmp/other-cmp.component';

@NgModule({
  imports: [
    CommonModule,
    MainPage2RoutingModule
  ],
  declarations: [CoreCmpComponent, OtherCmpComponent]
})
export class MainPage2Module { }
