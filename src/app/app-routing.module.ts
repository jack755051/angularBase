import {NgModule, Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './pages/index/index.component';
import {HomeComponent} from './pages/home/home.component';
import {ProductMainPageComponent} from './pages/product-main-page/product-main-page.component';
import {ProductHotPageComponent} from './pages/product-hot-page/product-hot-page.component';
import {AboutmeComponent} from './pages/aboutme/aboutme.component';
import {LastestNewsComponent} from './pages/lastest-news/lastest-news.component'

import {ProductPageComponent} from './common/product-page/product-page.component';
import {TechnicalSupportComponent} from "./pages/technical-support/technical-support.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {ErrorPageComponent} from "./pages/error-page/error-page.component";
import {FAQComponent} from "./pages/faq/faq.component";


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
        path: 'latest_news',
        component: LastestNewsComponent,
      },
      {
        path: 'technical_support',
        component: TechnicalSupportComponent,
      },
      {
        path: 'contact_us',
        component: ContactUsComponent,
      },
      {
        path: 'faq',
        component: FAQComponent,
      },
      {
        path: 'aboutguangxun',
        component: AboutmeComponent,
      },
      {
        path: 'product',
        component: ProductMainPageComponent,
      },
      {path: 'product/hot', component: ProductHotPageComponent},
      {path: 'product/:productId', component: ProductPageComponent},
      {path: '**', pathMatch: 'full', component: ErrorPageComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
