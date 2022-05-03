import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarDaysComponent } from './calendar-days/calendar-days.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarDaysComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
