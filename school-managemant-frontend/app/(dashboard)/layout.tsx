import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

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
      {/* Left section */}
      <div className="w-[17%] md:w-[8%] lg:w-[16%] xl:w-[17%] bg-amber-100">
        <Link
          href="/"
          className="flex items-center justify-center p-4 lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">SchoolLms</span>
        </Link>
        <Menu />
      </div>

      {/* Right section */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]">
        <Navbar/>
        {children}
      </div>
    </div>
  );
}
