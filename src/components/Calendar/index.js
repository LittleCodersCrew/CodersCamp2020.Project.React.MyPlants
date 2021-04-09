import Calendar from './Calendar';

export default Calendar;

// const CalendarCells: React.FunctionComponent = () => {

//   const thisDate = date;

//   let classes = 'calendar-cell';

//   if (selectedDate && isSameDay(date, selectedDate)) {
//     classes += ' calendar-cell--selected';
//   }

//   if (isToday(date)) {
//     classes += ' calendar-cell--today';
//   }

//   if (!isSameMonth(date, currentMonth)) {
//     classes += ' calendar-cell--disabled';
//   }

//   while (date <= dateEnd) {
//     dates.push(
//       <div
//         className={classes}
//         onClick={() => isSameMonth(thisDate, currentMonth) && setSelectedDate(thisDate)}
//         data-testid="calendar-cell">
//         <div className="calendar-cell__date">{format(date, 'd')}</div>
//       </div>
//     );

//     date = addDays(date, 1);
//   }

//   return <div className="calendar-cells">{dates}</div>;
// };
