"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";

const menuItems = [
  {
    title: "MENU",
    items: [
      { icon: "/home.png", label: "Home", href: "/", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/teacher.png", label: "Teachers", href: "/list/teachers", visible: ["admin", "teacher"] },
      { icon: "/student.png", label: "Students", href: "/list/students", visible: ["admin", "teacher"] },
      { icon: "/parent.png", label: "Parents", href: "/list/parents", visible: ["admin", "teacher"] },
      { icon: "/subject.png", label: "Subjects", href: "/list/subjects", visible: ["admin"] },
      { icon: "/class.png", label: "Classes", href: "/list/classes", visible: ["admin", "teacher"] },
      { icon: "/lesson.png", label: "Lessons", href: "/list/lessons", visible: ["admin", "teacher"] },
      { icon: "/exam.png", label: "Exams", href: "/list/exams", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/assignment.png", label: "Assignments", href: "/list/assignments", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/result.png", label: "Results", href: "/list/results", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/attendance.png", label: "Attendance", href: "/list/attendance", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/calendar.png", label: "Events", href: "/list/events", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/message.png", label: "Messages", href: "/list/messages", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/announcement.png", label: "Announcements", href: "/list/announcements", visible: ["admin", "teacher", "student", "parent"] },
    ],
  },
  {
    title: "OTHER",
    items: [
      { icon: "/profile.png", label: "Profile", href: "/profile", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/setting.png", label: "Settings", href: "/settings", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/logout.png", label: "Logout", href: "/logout", visible: ["admin", "teacher", "student", "parent"] },
    ],
  },
];

const Menu = () => {
  const role = "admin"; // dynamic later
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle button for mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-amber-300 p-2 rounded-md shadow-md hover:bg-amber-400 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <CloseIcon size={22} className="text-gray-800" /> : <MenuIcon size={22} className="text-gray-800" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full bg-amber-100 flex flex-col gap-6 z-40 transition-all duration-300 
        ${isOpen ? "w-52 p-4" : "w-16 p-2"} lg:w-60 lg:p-6 lg:border-r lg:border-amber-200 lg:shadow-sm`}
      >
        {/* Logo */}


        {/* Menu */}
        <nav className="flex flex-col gap-3 overflow-y-auto scrollbar-hide">
          {menuItems.map((section) => (
            <div key={section.title}>
              {(isOpen || typeof window !== "undefined") && (
                <h3 className={`text-xs text-gray-500 font-semibold mb-2 tracking-wider ${!isOpen && "hidden lg:block"}`}>
                  {section.title}
                </h3>
              )}
              <div className="flex flex-col gap-1">
                {section.items
                  .filter((item) => item.visible.includes(role))
                  .map((item) => (
                    <Link
                      href={item.href}
                      key={item.label}
                      className={`flex items-center gap-2 rounded-lg
                        py-2 px-2
                        transition-all
                        hover:bg-amber-200 text-gray-800
                        ${isOpen ? "justify-start" : "justify-center"}
                        lg:justify-start lg:px-3 lg:w-full`}
                    >
                      <Image src={item.icon} alt={item.label} width={22} height={22} />
                      {(isOpen || typeof window !== "undefined") && (
                        <span className="hidden lg:inline text-sm font-medium">{item.label}</span>
                      )}
                      {isOpen && <span className="lg:hidden text-sm font-medium">{item.label}</span>}
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Menu;
