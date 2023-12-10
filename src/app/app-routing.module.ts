import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { RootComponent } from './pages/root/root.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-root',
    pathMatch: 'full',
  },
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'test-page',
        component: TestPageComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
