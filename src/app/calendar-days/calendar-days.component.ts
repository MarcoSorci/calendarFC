import { Component, OnInit } from '@angular/core';
import { Day } from './day';

@Component({
  selector: 'app-calendar-days',
  templateUrl: './calendar-days.component.html',
  styleUrls: ['./calendar-days.component.scss']
})
export class CalendarDaysComponent implements OnInit {

  days: number[] = [];
  weekDay: number[] = [];
  date = new Date();
  currentYear = this.date.getFullYear();
  currentMonth = this.date.getMonth();

  constructor() { }

  ngOnInit(): void {
    console.log(this.createDay(3, 4, 2022))
  }

  getMonthName(monthIndex: number): string {
    switch (monthIndex) {
      case 0:
        return 'January';
      case 1:
        return 'February';
      case 2:
        return 'March';
      case 3:
        return 'April';
      case 4:
        return 'May';
      case 5:
        return 'June';
      case 6:
        return 'July';
      case 7:
        return 'August';
      case 8:
        return 'September';
      case 9:
        return 'October';
      case 10:
        return 'November';
      case 11:
        return 'December';
      default:
        return '';
    }
  }

  getWeekDayName(weekDay: number): string {
    switch (weekDay) {
      case 0:
        return 'Sun';
      case 1:
        return 'Mon';
      case 2:
        return 'Tue';
      case 3:
        return 'Wed';
      case 4:
        return 'Thu';
      case 5:
        return 'Fri';
      case 6:
        return 'Sat';
      default:
        return '';
    }
  }
  
  createDay(dayNumber: number, monthIndex: number, year: number) {
    let day = new Day();
    day.day = dayNumber;
    day.monthIndex = monthIndex;
    day.month = this.getMonthName(monthIndex);
    day.year = this.currentYear;
    day.weekDayNumber = new Date(year, monthIndex, dayNumber).getDay();
    day.weekDayName = this.getWeekDayName(day.weekDayNumber);
    return day;
  }


  getMonth(monthIndex: number, year:number) {
    let days = [];
    let firstDay = this.createDay(1, monthIndex, year);
    let countDaysInMonth = new Date(year, monthIndex, 0).getDate();
    for (let i = 1; i < countDaysInMonth + 1; i++) {
      days.push(this.createDay(i, monthIndex, year));
    }
  }
  // getStartingDay(date = new Date){
  //   let year = date.getFullYear();
  //   let month = date.getMonth();
  //   let firstDayOfMonth = new Date(year, month, 1).getTime(); 
  //   console.log(firstDayOfMonth);
    
  // }


}

// Tue May 03 2022 17:43:15 GMT+0200 

//getMonth() = 4 è all'index-1
//getDay() = 2 è sempre un giorno in meno del giorno attuale
//getTime() = 163728197219 è il timestamp
//getFullYear() = 2022 in numero
//getDate() = 3 è il numero di giorno esatto
//getHours() = 17 ora approssimata senza i minuti
//getMinutes() = 43 minuti 