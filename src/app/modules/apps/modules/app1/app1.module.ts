import { NgModule } from '@angular/core';
import { App1Component } from './app1.component';
import { SharedModule } from '../../../../shared/shared.module';
import { App1RoutingModule } from './app1-routing.module';
import { App1TableSortComponent } from './components/app1-table-sort/app1-table-sort.component';
import { App1TableCheckComponent } from './components/app1-table-check/app1-table-check.component';



@NgModule({
  declarations: [
    App1Component,
    App1TableSortComponent,
    App1TableCheckComponent
  ],
  imports: [
    SharedModule,
    App1RoutingModule
  ]
})
export class App1Module { }
