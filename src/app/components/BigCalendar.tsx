"use client";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "../lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import { View, Views } from "react-big-calendar";

const localizer = momentLocalizer(moment);

let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth();
let year = currentDate.getFullYear();

const START_HOUR = 8;
const EVENT_INTERVAL_HOURS = 1.8;
const EVENT_DURATION_MINUTES = 35;
const ITEMS_PER_DAY = 5;

const initializeEventDates = () => {
  calendarEvents.forEach((eventDate, index) => {
    const dayOffset = day + Math.floor(index / ITEMS_PER_DAY);
    const hourOffset =
      START_HOUR + (index % ITEMS_PER_DAY) * EVENT_INTERVAL_HOURS;
    eventDate.start = new Date(year, month, dayOffset, hourOffset, 0);
    eventDate.end = new Date(
      year,
      month,
      dayOffset,
      hourOffset,
      EVENT_DURATION_MINUTES
    );
  });
};

initializeEventDates();
console.log(calendarEvents);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      onView={handleOnChangeView}
      style={{ height: "98%" }}
      min={calendarEvents[0].start}
      max={calendarEvents[4].end}
    />
  );
};

export default BigCalendar;
