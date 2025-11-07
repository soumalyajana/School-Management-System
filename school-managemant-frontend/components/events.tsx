"use client";

import React from "react";
import Image from "next/image";

const events = [
  {
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "12:00 PM - 2:00 PM",
  },
  {
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "12:00 PM - 2:00 PM",
  },
];

const EventsSection = () => {
  return (
    <section className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">Events</h2>
        <Image src="/moreDark.png" alt="More options" width={20} height={20} className="cursor-pointer"/>
      </div>

      <div className="space-y-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="border-l-4 border-sky-200 bg-gray-50 rounded-lg p-4 hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-800">{event.title}</h3>
                <p className="text-gray-500 text-sm">{event.description}</p>
              </div>
              <p className="text-sm text-gray-400 whitespace-nowrap">{event.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
