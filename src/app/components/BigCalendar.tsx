"use client";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "../lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import { View, Views } from "react-big-calendar";

const localizer = momentLocalizer(moment);

const START_HOUR = 8;
const EVENT_INTERVAL_HOURS = 1;
const EVENT_DURATION_MINUTES = 35;
const ITEMS_PER_DAY = 8;

const initializeEventDates = () => {
  // Get the first day of the current week
  const startOfWeek = moment().startOf("week").toDate();
  const year = startOfWeek.getFullYear();
  const month = startOfWeek.getMonth();
  const day = startOfWeek.getDate();

  return calendarEvents.map((eventDate, index) => {
    const dayOffset = day + Math.floor(index / ITEMS_PER_DAY);
    const hourOffset =
      START_HOUR + (index % ITEMS_PER_DAY) * EVENT_INTERVAL_HOURS;
    return {
      ...eventDate,
      start: new Date(year, month, dayOffset, hourOffset, 0),
      end: new Date(year, month, dayOffset, hourOffset, EVENT_DURATION_MINUTES),
    };
  });
};

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);
  const [events, setEvents] = useState(initializeEventDates());

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      views={{ work_week: true, day: true }}
      view={view}
      onView={handleOnChangeView}
      style={{ height: "98%" }}
      min={events[0].start}
      max={events[ITEMS_PER_DAY - 1].end}
    />
  );
};

export default BigCalendar;
