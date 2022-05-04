import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarDaysComponent } from './calendar-days/calendar-days.component';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarDaysComponent,
    CalendarHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
