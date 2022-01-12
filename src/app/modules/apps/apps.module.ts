import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsComponent } from './apps.component';
import { SharedModule } from '../../shared/shared.module';
import { AppsRoutingModule } from './apps-routing.module';



@NgModule({
  declarations: [
    AppsComponent
  ],
  imports: [
    SharedModule,
    AppsRoutingModule
  ]
})
export class AppsModule { }
