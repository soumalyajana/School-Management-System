"use client";

import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import Image from "next/image";

const data = [
  { name: "Boys", count: 1234, fill: "#4F46E5" },
  { name: "Girls", count: 1006, fill: "#83a6ed" },
];

const CountChart = () => {
  return (
    <div className="p-4 rounded-2xl shadow-sm bg-white hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
      {/* Title */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold text-gray-700">Students</h1>
        <Image src="/moreDark.png" alt="More options" width={20} height={20} className="cursor-pointer"/>
      </div>

      {/* Chart */}
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              minAngle={15}
              background
              clockWise
              dataKey="count"
              label={{ position: "insideStart", fill: "#fff" }}
              isAnimationActive
              animationBegin={300}
              animationDuration={1200}
              animationEasing="ease-out"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Summary */}
      <div className="flex justify-around mt-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div className={`w-3.5 h-3.5 rounded-full`} style={{ backgroundColor: item.fill }}></div>
            <div className="text-center">
              <h1 className="font-bold text-gray-800">{item.count.toLocaleString()}</h1>
              <h2 className="text-xs text-gray-500">{item.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountChart;
