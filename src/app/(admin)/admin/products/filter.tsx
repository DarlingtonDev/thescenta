"use client";
import { Funnel } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const Filter = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  function handleFilter(value: string) {
    const paramsUrl = new URLSearchParams(searchParams.toString());

    paramsUrl.set("filter", value);
    router.push(`/admin/products?${paramsUrl.toString()}`);
    setFilterOpen(false);
  }
  return (
    <div className="w-[20%] py-1.5 border border-gray-300  flex justify-center items-center relative">
      <button
        className=" flex gap-x-2 text-xs cursor-pointer font-inter font-medium"
        onClick={() => setFilterOpen((filterOpen) => !filterOpen)}
      >
        <Funnel className="w-4 h-4" />
        Filter
      </button>
      {filterOpen && (
        <ul className="flex flex-col gap-y-4 w-fit absolute bg-white py-1 px-2 text-xs font-inter font-medium top-7 items-center  border border-gray-300">
          <li className="cursor-pointer" onClick={() => handleFilter("all")}>
            All
          </li>
          <li className="cursor-pointer" onClick={() => handleFilter("drafts")}>
            Drafts
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleFilter("createdAt")}
          >
            Created
          </li>

          <li
            className="cursor-pointer"
            onClick={() => handleFilter("impressions")}
          >
            Impressions
          </li>
        </ul>
      )}
    </div>
  );
};

export default Filter;
