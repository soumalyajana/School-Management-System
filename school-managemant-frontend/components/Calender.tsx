"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isMounted, setIsMounted] = React.useState(false);

  // ✅ Only render after client mounts to avoid SSR mismatch
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full flex justify-center p-4">
        <div className="w-[375px] max-w-full rounded-md border shadow-sm bg-gray-50 animate-pulse h-[350px]" />
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center bg-white rounded-2xl  p-4">
      <div className="w-[420px] max-w-full">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full rounded-md border shadow-sm"
          captionLayout="dropdown"
          locale="en-US" // ✅ consistent across server & client
        />
      </div>
    </div>
  );
}
