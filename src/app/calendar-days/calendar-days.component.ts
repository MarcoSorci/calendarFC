import { Component, OnInit } from '@angular/core';
import { Day } from './day';

@Component({
  selector: 'app-calendar-days',
  templateUrl: './calendar-days.component.html',
  styleUrls: ['./calendar-days.component.scss']
})
export class CalendarDaysComponent implements OnInit {

  daysInMonth: Day[] = [];
  date = new Date();
  currentYear = this.date.getFullYear();
  currentMonth = this.date.getMonth();
  firstDay!: Day;
  isLeapYear: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.daysInMonth = this.getMonth(this.currentMonth, this.currentYear);    
  }
  

  // create a Day object with property day, month, year and weekDayNumber (from 0 to 6 MON-SUN)
  createDay(dayNumber: number, monthIndex: number, year: number) { 
    let day = new Day();
    day.day = dayNumber;
    day.monthIndex = monthIndex;
    day.month = day.getMonthName(monthIndex);
    day.year = this.currentYear;
    day.weekDayNumber = new Date(year, monthIndex, dayNumber - 1).getDay(); // REMOVE 1 FROM DAY BECAUSE 1st of May is SUNDAY (not MONDAY)
    day.weekDayName = day.getWeekDayName(day.weekDayNumber);
    return day;
  }


  // create an array of DAYS based on the month selected and the year
  // -> first day of each month is the 1st
  // return last day of month with .getDate();
  // for each day in a month create a DAY object and push into the DAYS array
  getMonth(monthIndex: number, year:number) {
    let day = [];
    let countDaysInMonth = new Date(year, monthIndex + 1, 0).getDate(); 
    let countDaysInPrevMonth = new Date(year, monthIndex, 0).getDate();

    let lastPrevDay = this.createDay(countDaysInPrevMonth, monthIndex-1, year);
    this.firstDay = this.createDay(1, monthIndex, year);
    
    for (let i = 1; i <= this.firstDay.weekDayNumber; i++) {
      day.unshift(this.createDay(lastPrevDay.day, monthIndex - 1, year));
      lastPrevDay.day --;
    }
    for (let i = 1; i < countDaysInMonth + 1; i++) { 
      day.push(this.createDay(i, monthIndex, year));
    }
    return day;
  }


  // button click event to go to next month
  goToNextMonth() {
    this.currentMonth++; //NB: doesn't work with + 1 (only ++)
    if (this.currentMonth == 12) {
      this.currentMonth = 1;
      this.currentYear++;
    }
    this.daysInMonth = this.getMonth(this.currentMonth, this.currentYear); //RE-CALCULATE how many days are in the selected month   
  }


  // button click event to go to previous month
  goToPreviousMonth() {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.daysInMonth = this.getMonth(this.currentMonth, this.currentYear); //RE-CALCULATE how many days are in the selected month 
  }


  // NO NEED TO CALCULATE LEAP YEAR SINCE IT'S ALREADY DONE BY THE GETDATE();
  calculateLeapYear(year: number) {
    return this.isLeapYear = (year % 4 == 0 && year % 100 != 0) ? true : (year % 400 == 0) ? true : false;
  }

  


}

// Tue May 03 2022 17:43:15 GMT+0200 

//getMonth() = 4 è all'index-1
//getDay() = 2 è sempre un giorno in meno del giorno attuale
//getTime() = 163728197219 è il timestamp
//getFullYear() = 2022 in numero
//getDate() = 3 è il numero di giorno esatto
//getHours() = 17 ora approssimata senza i minuti
//getMinutes() = 43 minuti 