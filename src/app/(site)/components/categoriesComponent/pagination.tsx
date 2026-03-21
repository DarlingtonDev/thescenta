import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const Pagination = () => {
  return (
    <div className="flex justify-between items-center py-12">
      <button
        className="flex gap-1 items-center cursor-pointer"
        aria-label="Move to previous page"
      >
        <ChevronLeft className="w-4 h-4" />
        <p className="font-inter text-[13px] lg:text-xs font-semibold">
          Previous
        </p>
      </button>

      <nav
        className=" font-inter lg:text-xs text-[13px] font-semibold"
        aria-label="pagination"
      >
        <ul className="flex gap-6 lg:gap-3">
          <li className="-mt-0.5 underline text-green-500">
            <Link href="#" aria-current="page">
              1
            </Link>
          </li>
          <li>
            <Link href="#">2</Link>
          </li>
          <li>
            <Link href="#">3</Link>
          </li>
          <li>
            <span>...</span>
          </li>
          <li>
            <Link href="#">64</Link>
          </li>
        </ul>
      </nav>

      <button
        className="flex gap-1 items-center cursor-pointer"
        aria-label="Move to next page"
        rel="next"
      >
        <p className="font-inter text-[13px] lg:text-xs font-semibold">Next</p>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Pagination;
