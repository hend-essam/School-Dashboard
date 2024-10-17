"use client";
import Title from "./chartTitle";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", income: 4000, expense: 2400 },
  { name: "Feb", income: 3000, expense: 1398 },
  { name: "Mar", income: 2000, expense: 9800 },
  { name: "Apr", income: 2780, expense: 3908 },
  { name: "May", income: 1890, expense: 4800 },
  { name: "Jun", income: 2390, expense: 3800 },
  { name: "Jul", income: 7000, expense: 2000 },
  { name: "Aug", income: 2700, expense: 4300 },
  { name: "sep", income: 5000, expense: 9000 },
  { name: "Oct", income: 3490, expense: 4300 },
  { name: "Nov", income: 6000, expense: 3000 },
  { name: "Dec", income: 3490, expense: 5000 },
];

const FinanceChart = () => {
  return (
    <div className="h-80 bg-white p-3 rounded-2xl">
      <Title text="Finance" />
      <ResponsiveContainer width="99%" height="90%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#a7a7a7" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#a7a7a7" }}
            tickSize={10}
          />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingBottom: "20px" }}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#d4484d"
            activeDot={{ r: 7 }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#24188b"
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
