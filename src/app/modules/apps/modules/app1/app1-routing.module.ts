import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App1Component } from './app1.component';
import { App1TableCheckComponent } from './components/app1-table-check/app1-table-check.component';
import { App1TableSortComponent } from './components/app1-table-sort/app1-table-sort.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sort'
  }, {
    path: '',
    component: App1Component,
    children: [
      {
        path: 'sort',
        component: App1TableSortComponent
      }, {
        path: 'check',
        component: App1TableCheckComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class App1RoutingModule {
}
