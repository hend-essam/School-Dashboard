"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Title from "./Title";
import SimpleCard from "./SimpleCard";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Events = [
  {
    title: "Event",
    time: "12:pm - 2:pm",
    content: "content, Lorem ipsum dolor sit amet",
  },
  {
    title: "Event",
    time: "12:pm - 2:pm",
    content: "content, Lorem ipsum dolor sit amet",
  },
  {
    title: "Event",
    time: "12:pm - 2:pm",
    content: "content, Lorem ipsum dolor sit amet",
  },
  {
    title: "Event",
    time: "12:pm - 2:pm",
    content: "content, Lorem ipsum dolor sit amet",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="w-full rounded-t-[35px] flex flex-col md:flex-row lg:flex-col gap-4 p-2.5 pb-4 items-center md:items-stretch">
      <Calendar onChange={onChange} value={value} />
      <div className="flex flex-col gap-2 flex-1 p-3 lg:p-0 w-full">
        <Title text="Events" />
        {Events.map((event, index) => (
          <SimpleCard
            key={index}
            title={event.title}
            time={event.time}
            content={event.content}
          />
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
