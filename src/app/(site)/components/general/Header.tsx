"use client";
import Link from "next/link";
import Image from "next/image";
import { Heart, Menu, Search, ShoppingBasket, UserRound } from "lucide-react";
import { useContext } from "react";
import { Navcontext } from "../../contextApi/context";
const Header = () => {
  const context = useContext(Navcontext);
  if (!context) return null;
  const { toggleNav } = context;
  return (
    <>
      <header className="w-full lg:px-10 px-6 flex justify-center">
        <div className="border-b border-gray-200 flex justify-between w-full lg:w-[85%] min-h-14 items-center gap-2 py-1">
          <div className="w-[33%] lg:flex gap-4 font-inter text-gray-600 font-semibold text-[12px] hidden">
            <Link href="#" className="underline">
              Instagram
            </Link>
            <Link href="#" className="underline">
              Facebook
            </Link>
          </div>

          <button className="lg:hidden w-[33%]" aria-label="view navlinks">
            <Menu className="lg:hidden w-5 h-5" onClick={toggleNav} />
          </button>

          <div className="w-[33%] flex justify-center">
            <Image
              src="/logo (2).png"
              alt="thescenta logo image"
              width={100}
              height={100}
            />
          </div>
          <div className="w-[33%] flex justify-end lg:justify-center gap-2.5 lg:gap-7 items-center text-gray-600">
            <Link href="/search" scroll={false} aria-label="search products">
              <Search className="w-4 h-4 hidden lg:block" />
            </Link>

            <Link href="#" aria-label="user account">
              <UserRound className="w-4 h-4" />
            </Link>

            <Link href="/wishlist" aria-label="view wishlist">
              <Heart className="w-4 h-4 hidden lg:block" />
            </Link>
            <Link href="/cart" className="relative" aria-label="view cart page">
              <ShoppingBasket className="w-4 h-4" />
              <p className="absolute -top-3 -right-2.5 bg-primary px-1.5 font-inter text-white text-xs py-0.5 rounded-[50%]">
                0
              </p>
            </Link>
          </div>
        </div>
      </header>
      <nav className="mt-4 w-full lg:flex justify-center hidden">
        <ul className="flex gap-10 font-inter text-[13px] font-semibold text-gray-600">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/womens-perfumes">Women</Link>
          </li>
          <li>
            <Link href="/mens-perfumes">Men</Link>
          </li>
          <li>
            <Link href="/unisex-perfumes">Unisex</Link>
          </li>
          <li>
            <Link href="/perfume-gift-sets">Giftset</Link>
          </li>
          <li>
            <Link href="/offers">Offers</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
