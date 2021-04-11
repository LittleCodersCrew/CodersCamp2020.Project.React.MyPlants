/* eslint-disable no-loop-func */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
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
  isSameDay,
  parseISO
} from 'date-fns';
import ModalEvent from '../ModalEvent';
import styles, { daysOfMonth, disabled, today } from './Calendar.module.scss';
import ArrowLeft from '../../assets/icons/ArrowLeft.png';
import ArrowRight from '../../assets/icons/ArrowRight.png';
import useToken from '../../hooks/useToken/useToken';
import Database from '../../database';

const Calendar = () => {
  const { token } = useToken();
  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);

  const [events, setEvents] = useState([]);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const date = new Date(selectedDate.getTime() + 86400000).toJSON();

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const userId = JSON.parse(atob(token.split('.')[1])).id;

  useEffect(() => {
    async function fetchEvents() {
      let userEvents = [];

      await fetch(`${Database.URL}/calendar/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((res) => res.json())
        .then((json) => {
          userEvents = json.calendar.events;
        });

      setEvents(userEvents);
    }

    fetchEvents();
  });

  const header = () => (
    <div className={styles.header}>
      <div>
        <span>{format(currentDate, 'MMMM yyyy')}</span>
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

        if (isToday(day)) {
          classes += ` ${today}`;
        }

        if (!isSameMonth(day, currentDate)) {
          classes += ` ${disabled}`;
        }

        const openModal = () => {
          setShow(true);
          isSameMonth(cloneDay, currentDate);
          setSelectedDate(cloneDay);
        };

        days.push(
          <div
            role="button"
            tabIndex="0"
            className={classes}
            key={day}
            onClick={openModal}
            onKeyDown={() => null}>
            <span>{formattedDate}</span>
            <p>
              {events &&
                events
                  .filter((event) => isSameDay(addDays(day, 1), parseISO(event.date)))
                  .map((event) => <span className={styles.title}>{event.title}</span>)}
            </p>
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
    <div className={styles.wrapper}>
      <button onClick={prevMonth}>
        <img src={ArrowLeft} alt="left" />
      </button>
      <div className={styles.calendar}>
        <div>{header()}</div>
        <div>{daysOfWeek()}</div>
        <div>{cells()}</div>
      </div>
      <button onClick={nextMonth}>
        <img src={ArrowRight} alt="right" />
      </button>

      <ModalEvent closeModal={closeModal} show={show} date={date} />
    </div>
  );
};

export default Calendar;
