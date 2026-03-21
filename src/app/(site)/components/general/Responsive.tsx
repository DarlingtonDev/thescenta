"use client";
import { Navcontext } from "../../contextApi/context";
import { X } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

const ResponsiveNavbar = () => {
  const context = useContext(Navcontext);
  if (!context) return null;
  const { navopen, toggleNav, hasinteracted } = context;

  return (
    <header
      className={`absolute z-50 bg-white lg:hidden ${
        navopen
          ? "animate-translate"
          : hasinteracted
          ? "animate-translate-minus"
          : ""
      }  `}
    >
      <X
        className={`absolute text-black left-6 top-9 z-[60] opacity-0 ${
          navopen && "animate-enter delay-1000"
        }  `}
        onClick={toggleNav}
      />

      <div
        className={`absolute z-50 top-24 left-1/2 -translate-x-1/2 opacity-0 ${
          navopen && "animate-enter delay-1000"
        }`}
      >
        <nav className="mt-4 w-full">
          <ul className="flex flex-col gap-10 font-inter text-base uppercase text-center font-semibold text-gray-600">
            <li onClick={toggleNav}>
              <Link href="/">Home</Link>
            </li>
            <li onClick={toggleNav}>
              <Link href="/womens-perfumes">Women</Link>
            </li>
            <li onClick={toggleNav}>
              <Link href="/mens-perfumes">Men</Link>
            </li>
            <li onClick={toggleNav}>
              <Link href="/unisex-perfumes">Unisex</Link>
            </li>
            <li onClick={toggleNav}>
              <Link href="/perfume-gift-sets">Giftset</Link>
            </li>
            <li onClick={toggleNav}>
              <Link href="/offers">Offers</Link>
            </li>
            <li onClick={toggleNav}>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className={`absolute z-50 bottom-0 flex w-full opacity-0 ${
          navopen && "animate-enter delay-1000"
        }`}
      >
        <button className="w-[50%] py-3 border-t border-r border-gray-300">
          WISHLIST
        </button>
        <button className="w-[50%] py-3 border-t border-gray-300">MAIL</button>
      </div>
    </header>
  );
};

export default ResponsiveNavbar;
