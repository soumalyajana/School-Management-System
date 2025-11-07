"use client";

import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";
import SimpleBarChart from "@/components/AttendanceChart";
import FinanceCharts from "@/components/FinanceCharts";
import { CalendarDemo } from "@/components/Calender";
import EventsSection from "@/components/events";
import AnnouncementsSection from "@/components/AnnouncementsSection";

const AdminPage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* ===== Left Section ===== */}
      <div className="w-full lg:w-2/3 flex flex-col gap-6">
        {/* Top: User Cards */}
        <div className="flex flex-wrap justify-between gap-4">
          <UserCard type="Student" />
          <UserCard type="Teacher" />
          <UserCard type="Parent" />
          <UserCard type="Staff" />
        </div>

        {/* Middle: Charts */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Count Chart */}
          <div className="w-full lg:w-1/3 h-[400px]">
            <CountChart />
          </div>

          {/* Attendance Chart */}
          <div className="w-full lg:w-2/3 h-[400px]">
            <SimpleBarChart />
          </div>
        </div>

        {/* Bottom: Finance Chart */}
        <div className="w-full h-[475px]">
          <FinanceCharts />
        </div>
      </div>

      {/* ===== Right Section ===== */}
      <div className="w-full lg:w-1/3 flex flex-col gap-3">
        <CalendarDemo />
          <EventsSection/>
          <AnnouncementsSection/>
        
      </div>
    </div>
  );
};

export default AdminPage;
