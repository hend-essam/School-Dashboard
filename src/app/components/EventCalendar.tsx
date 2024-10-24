"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Title from "./Title";
import Event from "./Event";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Events = [
  { title: "Event", content: "content, Lorem ipsum dolor sit amet" },
  { title: "Event", content: "content, Lorem ipsum dolor sit amet" },
  { title: "Event", content: "content, Lorem ipsum dolor sit amet" },
  { title: "Event", content: "content, Lorem ipsum dolor sit amet" },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div
      className="h-full w-full lg:w-[30%] rounded-[35px] flex flex-col md:flex-row lg:flex-col gap-4 p-2.5 items-center md:items-stretch"
      style={{ boxShadow: "0 0 10px 10px #cfcfcfd9" }}
    >
      <Calendar onChange={onChange} value={value} />
      <div className="flex flex-col gap-2 flex-1 p-3 lg:p-0 w-full">
        <Title text="Events" />
        {Events.map((event) => (
          <Event title={event.title} content={event.content} />
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
