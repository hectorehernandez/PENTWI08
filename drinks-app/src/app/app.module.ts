import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DrinksModule } from './drinks/drinks.module';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CategoryModule } from './categories/category.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    DrinksModule,
    CategoryModule,
    AppRoutingModule
  ],
  exports: [DashboardComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
