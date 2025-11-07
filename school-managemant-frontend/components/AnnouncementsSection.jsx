"use client";

import React from "react";

const announcements = [
  {
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    date: "2025-01-01",
  },
  {
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    date: "2025-01-01",
  },
];

const AnnouncementsSection = () => {
  return (
    <section className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 mt-2">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">
          <span className="bg-green-100 px-2 py-0.5 rounded">Announcements</span>
        </h2>
        <button className="text-sm text-blue-600 hover:underline">View All</button>
      </div>

      <div className="space-y-3">
        {announcements.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg p-4 transition-all ${
              index % 2 === 0 ? "bg-blue-50" : "bg-purple-50"
            } hover:shadow-md`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
              <span className="text-xs text-gray-500">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnnouncementsSection;
