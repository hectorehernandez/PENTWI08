import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DrinksModule } from './drinks/drinks.module';
import { CommonModule } from '@angular/common';
import { HttpInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { DrinkInMemoryDataService } from './drinks/drink-in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    HttpInMemoryWebApiModule.forRoot(DrinkInMemoryDataService, { dataEncapsulation: false}),
    DrinksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
