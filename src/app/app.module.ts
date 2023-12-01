import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { RegionComponent } from './components/region/region.component';
import { SousRegionComponent } from './components/sous-region/sous-region.component';
import { PaysComponent } from './components/pays/pays.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {PaginationModule } from 'ngx-bootstrap/pagination'
import { ToastrModule } from 'ngx-toastr';
import {  NgxChartsModule } from '@swimlane/ngx-charts';
import { StatisticComponent } from './components/statistic/statistic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BarRatingModule } from "ngx-bar-rating";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    AProposComponent,
    RegionComponent,
    SousRegionComponent,
    PaysComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PaginationModule,
    ToastrModule.forRoot(),
    NgxChartsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    BarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
