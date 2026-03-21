"use client";
import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const CategoryHeader = ({ route }: { route: string }) => {
  const [active, setActive] = useState(0);

  function clickedActive(num: number) {
    setActive(num);
  }
  return (
    <div className="w-full flex flex-col lg:flex-row lg:justify-between mt-7 gap-y-6 lg:items-center ">
      <div className="flex min-w-[50%] bg-gray-100 border border-gray-200 py-1 font-medium font-inter text-xs rounded-md justify-between px-1">
        <Link
          href="#"
          className={`w-[30%] flex justify-center items-center py-2 lg:py-1  ${
            active === 0
              ? "bg-white rounded-md border border-gray-300"
              : "text-gray-400"
          } `}
          aria-current="page"
          onClick={() => clickedActive(0)}
        >
          All
        </Link>
        <Link
          href="#"
          className={`w-[30%] flex justify-center items-center py-2 lg:py-1 ${
            active === 1
              ? "bg-white rounded-md border border-gray-300"
              : "text-gray-400"
          } `}
          onClick={() => clickedActive(1)}
        >
          Active
        </Link>
        <Link
          href="#"
          className={`w-[30%] flex justify-center items-center py-2 lg:py-1 ${
            active === 2
              ? "bg-white rounded-md border border-gray-300"
              : "text-gray-400"
          } `}
          onClick={() => clickedActive(2)}
        >
          Non-active
        </Link>
      </div>

      <form action="" className="relative">
        <input
          aria-label="Seach products"
          type="text"
          placeholder={`Search ${
            route === "unisex" || "gift set" ? route : `${route}'s`
          } perfume`}
          className="outline-0 border border-gray-200 py-3 lg:py-2 px-7 rounded-md font-inter font-medium text-xs lg:w-fit w-[80%] "
        />

        <Search className="absolute top-1/2 -translate-y-1/2 w-4 h-4 left-2" />
      </form>
    </div>
  );
};

export default CategoryHeader;
