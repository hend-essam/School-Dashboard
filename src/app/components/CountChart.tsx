"use client";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { Girl, Boy } from "./icons/index";

type DataItem = {
  name: string;
  count: number;
  fill: string;
  icon?: JSX.Element;
};

const data: DataItem[] = [
  { name: "All", count: 1180, fill: "#fff" },
  { name: "Girls", count: 750, fill: "#fea4dd", icon: <Girl /> },
  { name: "Boys", count: 430, fill: "#7dabff", icon: <Boy /> },
];

const CountChart = () => {
  const legendData = data.filter((item) => item.name !== "All");
  const calculatePercent = (num: number) => {
    return ~~((num / 1180) * 100);
  };

  return (
    <div className="h-80 w-60 p-3 bg-white rounded-2xl flex flex-col">
      {/* Title */}
      <div className="flex justify-between">
        <h1>Students</h1>
        <EllipsisHorizontalIcon className="h-6 w-6" />
      </div>
      {/* Chart */}
      <div className="w-full h-full">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={30}
            data={data}
          >
            <RadialBar background dataKey="count" cornerRadius={10} />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      {/* bottom */}
      <div className="flex justify-around pb-1">
        {legendData.map((item) => (
          <div className="flex flex-col items-center" key={item.name}>
            {item.icon}
            <span className="text-gray-400 text-xs">{item.name}</span>
            <span className="text-gray-500 text-sm">{`${
              item.count
            } (${calculatePercent(item.count)}%)`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountChart;