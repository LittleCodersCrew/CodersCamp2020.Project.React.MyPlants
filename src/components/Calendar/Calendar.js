import React, { useState } from 'react';
import {
  format,
  addMonths,
  subMonths,
  startOfWeek,
  endOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  isSameMonth,
  isToday,
  isSameDay
} from 'date-fns';
import styles, { daysOfMonth, disabled, today, selected } from './Calendar.module.scss';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const header = () => (
    <div className={styles.header}>
      <div>
        <button onClick={prevMonth}>left</button>
      </div>
      <div>
        <span>{format(currentDate, 'MMMM yyyy')}</span>
      </div>
      <div>
        <button onClick={nextMonth}>right</button>
      </div>
    </div>
  );

  const daysOfWeek = () => {
    const days = [];
    const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });

    for (let i = 0; i < 7; i += 1) {
      days.push(
        <div className={styles.daysOfWeek} key={i}>
          {format(addDays(weekStart, i), 'EEEE')}
        </div>
      );
    }
    return <div className={styles.row}>{days}</div>;
  };

  const cells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows = [];

    let days = [];
    let day = startDate;

    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i += 1) {
        const cloneDay = day;

        formattedDate = format(day, 'd');

        let classes = `${daysOfMonth}`;

        if (selectedDate && isSameDay(day, selectedDate) && !isToday(day)) {
          classes += ` ${selected}`;
        }

        if (isToday(day)) {
          classes += ` ${today}`;
        }

        if (!isSameMonth(day, currentDate)) {
          classes += ` ${disabled}`;
        }

        days.push(
          <div
            role="button"
            tabIndex="0"
            className={classes}
            key={day}
            onClick={() => isSameMonth(cloneDay, currentDate) && setSelectedDate(cloneDay)}
            // eslint-disable-next-line react/jsx-closing-bracket-location
            onKeyDown={() => null}>
            <span>{formattedDate}</span>
          </div>
        );

        day = addDays(day, 1);
      }
      rows.push(
        <div className={styles.row} key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div>{rows}</div>;
  };

  return (
    <div className={styles.calendar}>
      <div>{header()}</div>
      <div>{daysOfWeek()}</div>
      <div>{cells()}</div>
    </div>
  );
};

export default Calendar;
