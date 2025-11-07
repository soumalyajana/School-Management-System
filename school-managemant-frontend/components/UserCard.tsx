"use client";

import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div
      className="
        flex-1 p-3 rounded-2xl shadow-sm 
        odd:bg-gradient-to-br odd:from-indigo-100 odd:to-blue-50 
        even:bg-gradient-to-br even:from-emerald-100 even:to-green-50
        hover:shadow-md hover:-translate-y-1 transition-all duration-300
        text-gray-800 font-medium text-center
      "
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-[11px] font-semibold bg-white px-2 py-1 rounded-full text-green-600 shadow-sm">
          2024/25
        </span>
        <Image src="/more.png" alt="menu" width={18} height={18} className="cursor-pointer" />
      </div>

      {/* Value */}
      <h1 className="text-3xl font-bold text-gray-700 mb-1">1234</h1>

      {/* Label */}
      <h2 className="capitalize text-sm text-gray-500 tracking-wide">
        {type}s
      </h2>
    </div>
  );
};

export default UserCard;
