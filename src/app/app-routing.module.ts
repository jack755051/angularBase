import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductMainPageComponent } from './pages/product-main-page/product-main-page.component';
import { ProductHotPageComponent } from './pages/product-hot-page/product-hot-page.component';
import { ProductPageComponent } from './common/product-page/product-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index/home',
    pathMatch: 'full',
  },
  {
    path: 'index',
    component: IndexComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'product',
        component: ProductMainPageComponent,
      },
      { path: 'product/hot', component: ProductHotPageComponent },
      { path: 'product/:productId', component: ProductPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
