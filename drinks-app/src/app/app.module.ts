import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DrinksModule } from './drinks/drinks.module';
import { CommonModule } from '@angular/common';
import { DrinkListComponent } from './drinks/drink-list.component';
import { DrinkService } from './drinks/drink.service';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    DrinksModule
  ],
  providers: [DrinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
