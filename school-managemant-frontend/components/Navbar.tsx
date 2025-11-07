"use client";


import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-between p-3 bg-white border-b border-gray-100">
      {/* Search bar */}
      <div className="hidden md:flex items-center gap-2 text-sm border border-gray-200 rounded-xl px-3 py-1.5 shadow-sm focus-within:ring-1 focus-within:ring-blue-400 transition">
        <input
          type="text"
          placeholder="Search..."
          className="w-[320px] bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />
        <Image src="/search.png" alt="search" width={16} height={16} />
      </div>

      {/* Icons and user info */}
      <div className="flex items-center gap-6 justify-end w-full">
        {/* Message icon */}
        <div className="relative bg-gray-50 hover:bg-gray-100 transition rounded-full w-7 h-7 flex items-center justify-center shadow-sm cursor-pointer">
          <Image src="/message.png" alt="messages" width={20} height={20} />
        </div>

        {/* Notification icon */}
        <div className="relative bg-gray-50 hover:bg-gray-100 transition rounded-full w-7 h-7 flex items-center justify-center shadow-sm cursor-pointer">
          <Image src="/announcement.png" alt="notifications" width={20} height={20} />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 text-white rounded-full text-[10px] flex items-center justify-center font-medium shadow-md">
            1
          </div>
        </div>

        {/* User info */}
        <div className="hidden sm:flex flex-col items-end leading-tight">
          <span className="text-sm font-semibold text-gray-800">John Doe</span>
          <span className="text-[11px] text-gray-500">Admin</span>
        </div>

        {/* Avatar + Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="w-8 h-8 rounded-full overflow-hidden border-2 border-blue-400 shadow-sm cursor-pointer hover:scale-105 transition"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Image
              src="/avatar.png"
              alt="User Avatar"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50 animate-fadeIn">
              <Link
                href="/profile"
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                <Image src="/profile.png" alt="profile" width={18} height={18} />
                Profile
              </Link>
              <Link
                href="/settings"
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                <Image src="/setting.png" alt="settings" width={18} height={18} />
                Settings
              </Link>
              <Link
                href="/logout"
                className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
              >
                <Image src="/logout.png" alt="logout" width={18} height={18} />
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
