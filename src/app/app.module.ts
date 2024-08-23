
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { counterReducer } from './counter/state/counter.reducer';
import { CounterModule } from './counter/counter.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CounterModule,
    RouterModule,
    StoreModule.forRoot(counterReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
