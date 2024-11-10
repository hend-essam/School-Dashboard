"use client";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "../lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import { View, Views } from "react-big-calendar";

const localizer = momentLocalizer(moment);

const START_HOUR = 8;
const END_HOUR = 15; // Set end time to 3 PM
const EVENT_INTERVAL_HOURS = 1;
const EVENT_DURATION_MINUTES = 35;
const ITEMS_PER_DAY = 7;

const initializeEventDates = () => {
  const startOfToday = moment().startOf("day").toDate();
  const weekStart = moment(startOfToday).startOf("week");
  const year = weekStart.year();
  const month = weekStart.month();

  return calendarEvents.map((eventDate, index) => {
    const dayOffset = moment(weekStart)
      .add(Math.floor(index / ITEMS_PER_DAY), "days")
      .date();
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
  const [events] = useState(initializeEventDates());

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
      min={
        new Date(moment().startOf("day").set("hour", START_HOUR).toISOString())
      } // Start time set to 8 AM
      max={
        new Date(moment().startOf("day").set("hour", END_HOUR).toISOString())
      } // End time set to 3 PM
    />
  );
};

export default BigCalendar;
