import { Bell, Search } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="px-8 w-full flex items-center h-16 justify-between fixed top-0 left-0  z-40 bg-white">
      <div className="h-10 relative w-28 -mt-2">
        <Image
          src="/fortune.png"
          alt="nonso logo"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex items-center w-[70%] font-inter text-xs font-medium relative">
        <input
          type="text"
          placeholder="Search Products"
          className="w-full outline-0 border-gray-300 py-2 rounded-md  border px-8"
        />
        <Search className="absolute w-4 h-4 left-2" />
      </div>

      <div className="w-[12%] flex gap-x-5 items-center justify-end">
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
