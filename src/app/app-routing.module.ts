import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { SidemenuComponent } from './shared/component/sidemenu/sidemenu.component';

const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children: [{
    path:'',
    component: DashboardComponent
  },{
    path:'connect',
    component: SidemenuComponent}]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
