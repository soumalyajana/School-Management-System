"use client";
import Image from "next/image";
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

const data = [
  { name: "Mon", present: 40, absent: 60 },
  { name: "Tue", present: 90, absent: 75 },
  { name: "Wed", present: 34, absent: 60 },
  { name: "Thu", present: 69, absent: 40 },
  { name: "Fri", present: 80, absent: 30 },
];

const SimpleBarChart = () => {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-sm h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold text-gray-700">Weekly Attendance</h1>
        <Image src="/moreDark.png" alt="menu" width={18} height={18} className="cursor-pointer" />
      </div>

      {/* Chart */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="present" fill="#4F46E5" radius={[6, 6, 0, 0]} />
            <Bar dataKey="absent" fill="#F87171" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SimpleBarChart;
