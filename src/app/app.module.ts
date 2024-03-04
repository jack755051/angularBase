import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import * as echarts from 'echarts';
// import { NgxEchartsModule } from 'ngx-echarts';

//material
import {
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import {MatTableDataSource,MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRippleModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';

//page
import {FooterComponent} from './common/footer/footer.component';
import {HeaderComponent} from './common/header/header.component';
import {IndexComponent} from './pages/index/index.component';
import {AlertComponent} from './common/dialog/alert/alert.component';
import {HomeComponent} from './pages/home/home.component';
import {ProductMainPageComponent} from './pages/product-main-page/product-main-page.component';
import {ProductHotPageComponent} from './pages/product-hot-page/product-hot-page.component';
import {CarouselComponent} from './common/carousel/carousel.component';
import {CardComponent} from './common/card/card.component';
import {ProductPageComponent} from './common/product-page/product-page.component';
import {AboutmeComponent} from './pages/aboutme/aboutme.component';
import {LastestNewsComponent} from './pages/lastest-news/lastest-news.component';
import {TechnicalSupportComponent} from './pages/technical-support/technical-support.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { FAQComponent } from './pages/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    AlertComponent,
    HomeComponent,
    ProductMainPageComponent,
    ProductHotPageComponent,
    CarouselComponent,
    CardComponent,
    ProductPageComponent,
    AboutmeComponent,
    LastestNewsComponent,
    TechnicalSupportComponent,
    ContactUsComponent,
    ErrorPageComponent,
    FAQComponent,
  ],
  imports: [
    // NgxEchartsModule.forRoot({
    //   echarts: () => import('echarts'),
    // }),
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatSortModule,
    MatSidenavModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatTabsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
