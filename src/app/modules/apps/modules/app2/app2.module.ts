import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { App2RoutingModule } from './app2-routing.module';
import { App2TreeComponent } from './components/app2-tree/app2-tree.component';
import { App2ListComponent } from './components/app2-list/app2-list.component';
import { App2DragComponent } from './components/app2-drag/app2-drag.component';



@NgModule({
  declarations: [
    App2TreeComponent,
    App2ListComponent,
    App2DragComponent
  ],
  imports: [
    SharedModule,
    App2RoutingModule
  ]
})
export class App2Module { }
