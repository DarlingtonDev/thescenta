"use client";

import { Bell, Menu, Search } from "lucide-react";
import Image from "next/image";

const Header = ({ onMenuClick }: { onMenuClick?: () => void }) => {
  return (
    <header className="px-4 sm:px-8 w-full flex items-center h-16 justify-between gap-2 sm:gap-4 fixed top-0 left-0 z-40 bg-white">
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <button
          type="button"
          className="lg:hidden p-1"
          onClick={onMenuClick}
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="h-10 relative w-20 sm:w-28 -mt-2">
          <Image
            src="/fortune.png"
            alt="nonso logo"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex items-center flex-1 min-w-0 max-w-xl font-inter text-xs font-medium relative">
        <input
          type="text"
          placeholder="Search Products"
          className="w-full outline-0 border-gray-300 py-2 rounded-md border px-8"
        />
        <Search className="absolute w-4 h-4 left-2" />
      </div>

      <div className="flex gap-x-3 sm:gap-x-5 items-center justify-end shrink-0">
        <div className="relative">
          <Bell className="w-4 h-4" />
          <div className="absolute w-1.5 h-1.5 right-0.5 top-0 rounded-[50%] bg-primary"></div>
        </div>

        <div className="w-6 h-6 rounded-[50%] border border-gray-200 relative flex">
          <Image
            src="/logo (2).png"
            alt="thescenta logo image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
