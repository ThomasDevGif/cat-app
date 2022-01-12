import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppsComponent } from './apps.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app1'
  }, {
    path: '',
    component: AppsComponent,
    children: [
      {
        path: 'app1',
        loadChildren: () => import('./modules/app1/app1.module').then(m => m.App1Module)
      }, {
        path: 'app2',
        loadChildren: () => import('./modules/app2/app2.module').then(m => m.App2Module)
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AppsRoutingModule {
}
