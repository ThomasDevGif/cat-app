import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App2Component } from './app2.component';
import { App2DragComponent } from './components/app2-drag/app2-drag.component';
import { App2TreeComponent } from './components/app2-tree/app2-tree.component';
import { App2ListComponent } from './components/app2-list/app2-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'drag'
  }, {
    path: '',
    component: App2Component,
    children: [
      {
        path: 'drag',
        component: App2DragComponent
      }, {
        path: 'tree',
        component: App2TreeComponent
      }, {
        path: 'list',
        component: App2ListComponent
      }
    ]
  }
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class App2RoutingModule {
}
