import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { IndexComponent } from './common/index/index.component';
import { AlertComponent } from './common/dialog/alert/alert.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RootComponent } from './pages/root/root.component';

// import * as echarts from 'echarts';
// import { NgxEchartsModule } from 'ngx-echarts';

//material
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    AlertComponent,
    TestPageComponent,
    RootComponent
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
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
