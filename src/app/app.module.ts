
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';

import { CounterModule } from './counter/counter.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { appReducer } from '../app/counter/state/app.reducer';


@NgModule({
  declarations: [AppComponent ],
  imports: [
    BrowserModule,
    CounterModule,
    RouterModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
