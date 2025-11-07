"use client";

import { useState, useEffect } from "react";
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
];

const Menu = () => {
  const role = "admin";
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-200 p-2 rounded-md shadow-md hover:bg-gray-300 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <CloseIcon size={22} className="text-gray-800" /> : <MenuIcon size={22} className="text-gray-800" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen bg-white flex flex-col gap-6
          border-r border-gray-200 shadow-sm
          transition-all duration-300 z-40
          overflow-y-auto
          ${isOpen ? "w-52 p-4" : "w-16 p-2"} 
          lg:w-52 lg:p-6
        `}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2 mt-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-semibold text-gray-700 text-base">
            AcademiaPro
          </span>
        </Link>

        {/* Menu Section */}
        <nav className="flex flex-col gap-4 mt-4">
          {menuItems.map((section) => (
            <div key={section.title}>
              <h3
                className={`text-[11px] uppercase text-gray-500 font-semibold mb-2 tracking-widest ${
                  isOpen ? "block" : "hidden lg:block"
                }`}
              >
                {section.title}
              </h3>

              <div className="flex flex-col gap-1">
                {section.items
                  .filter((item) => item.visible.includes(role))
                  .map((item) => (
                    <Link
                      href={item.href}
                      key={item.label}
                      className={`
                        flex items-center gap-3 rounded-lg py-2 px-2 text-sm font-medium
                        transition-all duration-200 hover:bg-gray-100 hover:text-blue-600 text-gray-800
                        ${isOpen ? "justify-start" : "justify-center"}
                        lg:justify-start lg:px-3 lg:w-full
                      `}
                    >
                      <Image src={item.icon} alt={item.label} width={22} height={22} />
                      <span className={`${isOpen ? "inline" : "hidden lg:inline"}`}>
                        {item.label}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main content wrapper to prevent overlap */}
      <div
        className={`
          transition-all duration-300
          ${isOpen ? "ml-52" : "ml-16"}
          lg:ml-52
        `}
      >
        {/* Example Header Area */}
        <header className="h-16 bg-white shadow-sm flex items-center px-6">
          <h1 className="text-lg font-semibold text-gray-700">Dashboard Header</h1>
        </header>

        {/* Example Scrollable Content */}
        <main className="p-6">
          <p className="text-gray-600">
            Your page content goes here. The sidebar will stay fixed, and this section
            will scroll smoothly beside it.
          </p>
        </main>
      </div>
    </>
  );
};

export default Menu;
