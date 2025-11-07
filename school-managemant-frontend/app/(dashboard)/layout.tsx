import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import type { Metadata } from "next";
import ClientNavbarWrapper from "@/components/ClientNavbarWrapper";

export const metadata: Metadata = {
  title: "School Management System",
  description: "Admin Dashboard Layout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* Left section (Sidebar) */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-white border-gray-200 shadow-sm">
        <Menu />
      </div>

      {/* Right section */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-gray-50">
        <ClientNavbarWrapper />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
