"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
  { name: 'Jan', income: 4000, expense: 2400 },
  { name: 'Feb', income: 3000, expense: 2200 },
  { name: 'Mar', income: 2000, expense: 9800 },
  { name: 'Apr', income: 2780, expense: 3908 },
  { name: 'May', income: 1890, expense: 4800 },
  { name: 'Jun', income: 2390, expense: 3800 },
  { name: 'Jul', income: 3490, expense: 4300 },
  { name: 'Aug', income: 3000, expense: 1398 },
  { name: 'Sep', income: 2000, expense: 9800 },
  { name: 'Oct', income: 2780, expense: 3908 },
  { name: 'Nov', income: 1890, expense: 4800 },
  { name: 'Dec', income: 1890, expense: 4800 },
];

export default function FinanceCharts() {
  return (
    <div className="p-4 h-full bg-white rounded-2xl shadow-sm flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold text-gray-700">Income vs Expense</h1>
        <Image src="/moreDark.png" alt="More options" width={20} height={20} className="cursor-pointer" />
      </div>

      {/* Chart */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="income" stroke="#4F46E5" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="expense" stroke="#F87171" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
