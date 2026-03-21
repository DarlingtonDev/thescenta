import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const SearchModal = () => {
  const RecentSearch = ({ search }: { search: string }) => {
    return (
      <Link
        href="#"
        className="bg-gray-200 py-1.5 px-3 rounded-sm text-gray-800 text-[11px]"
      >
        {search}
      </Link>
    );
  };

  const TrendingSearches = () => {
    return (
      <div className="w-[30%] flex items-center gap-x-2">
        <div className="w-[30%]  border border-gray-200 rounded-md">
          <Image
            src="/burbery.webp"
            alt="burbery"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <div className="w-[70%] ">
          <h2 className="font-inter text-[11px] font-medium overflow-hidden overflow-ellipsis whitespace-nowrap">
            Paris Corner Burberry Goddess EDP 100ml
          </h2>
          <h2 className="font-inter text-[11px] font-black overflow-hidden overflow-ellipsis whitespace-nowrap mt-0.5 text-primary">
            ₦54,000.00
          </h2>
        </div>
      </div>
    );
  };
  return (
    <div className="fixed z-50 inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white w-[50%] min-h-[50%] rounded-md px-5 py-5">
        <div className="flex w-full justify-end ">
          <X className="w-4 h-4" />
        </div>

        <form action="" className="relative font-inter text-[13px] font-medium">
          <Search className="w-4 h-4 absolute top-1/2 -translate-y-1/2" />
          <input
            aria-label="Search Products"
            type="text"
            name=""
            id=""
            placeholder="Search Products"
            className="px-6 border-b w-full py-1 outline-0 border-gray-200"
          />
        </form>

        <div className="mt-3">
          <div className="flex justify-between items-center">
            <h2 className="font-inter font-semibold text-[13px]">
              Recent Searches
            </h2>

            <Link
              href="#"
              className="font-inter text-primary underline text-xs "
            >
              Clear All
            </Link>
          </div>

          <div className="flex gap-3 flex-wrap items-center mt-2 font-inter text-xs font-medium ">
            <RecentSearch search="Paris Corner Burberry Goddess EDP 100ml" />
            <RecentSearch search="Flaming Elixir 80ml EDP Maison Alhambra" />
            <RecentSearch search="Alhambra Pink Eclipse EDP 100ml" />
            <RecentSearch search="Paris Corner Burberry Goddess EDP 100ml" />
          </div>
        </div>

        <div className="mt-6">
          <h2 className="font-inter font-semibold text-[13px]">
            Trending Searches
          </h2>

          <div className="flex gap-3 flex-wrap items-center mt-2 font-inter text-xs font-medium ">
            <TrendingSearches />
            <TrendingSearches />
            <TrendingSearches />
            <TrendingSearches />
            <TrendingSearches />
            <TrendingSearches />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
