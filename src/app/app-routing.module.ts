import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublicZoneComponent } from './public-zone/public-zone.component';
import { PrivateZoneComponent } from './private-zone/private-zone.component';
import { DemoListComponent } from './demo-list/demo-list.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [{
  path: '',
  component: PublicZoneComponent,
  children: [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'login', component: LoginComponent
  }]
}, {
  path: 'admin',
  component: PrivateZoneComponent,
  children: [{
    path: 'demo-list', component: DemoListComponent
  }, {
    path: 'demo-form', component: DemoFormComponent
  }, {
    path: 'demo', component: DemoComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
