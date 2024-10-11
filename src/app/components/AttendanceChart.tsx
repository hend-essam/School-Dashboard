"use client";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type DataItem = {
  name: string;
  present: number;
  absent: number;
};

const data: DataItem[] = [
  { name: "Mon", present: 65, absent: 50 },
  { name: "Tue", present: 70, absent: 60 },
  { name: "Wed", present: 95, absent: 80 },
  { name: "Thu", present: 65, absent: 70 },
  { name: "Fri", present: 62, absent: 58 },
];

const AttendanceChart = () => {
  return (
    <div className="w-2/3 h-80 bg-white p-3 rounded-2xl">
      {/* Title */}
      <div className="flex justify-between">
        <h1>Attendance</h1>
        <EllipsisHorizontalIcon className="h-6 w-6" />
      </div>
      <div className="h-full w-full">
        <ResponsiveContainer width="100%" height="90%">
          <BarChart width={500} height={300} data={data} barSize={20}>
            <CartesianGrid vertical={false} strokeDasharray="3" stroke="#ddd" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#d1d5db" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#d1d5db" }}
              tickSize={20}
            />
            <Tooltip
              contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
            />
            <Legend
              align="left"
              verticalAlign="top"
              iconType="circle"
              wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
            />
            <Bar dataKey="present" fill="#fea4dd" radius={[10, 10, 0, 0]} />
            <Bar dataKey="absent" fill="#7dabff" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
