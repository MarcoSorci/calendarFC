export class Day {
    day!: number;
    year!: number;
    month!: string;
    monthIndex!: number;
    weekDayName!: string;
    weekDayNumber!: number;

    public getMonthName(monthIndex: number): string {
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
    
    public getWeekDayName(weekDay: number): string {
        switch (weekDay) {
            case 0:
                return 'Mon';
            case 1:
                return 'Tue';
            case 2:
                return 'Wed';
            case 3:
                return 'Thu';
            case 4:
                return 'Fri';
            case 5:
                return 'Sat';
            case 6:
                return 'Sun';
            default:
                return '';
        }
    }
}