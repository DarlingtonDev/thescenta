import { Mail, MapPinned, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="min-h-50 px-4 lg:px-16 mt-12 py-4 border-t border-gray-200 lg:border-0">
      <div className="flex gap-8 lg:gap-20 flex-col lg:flex-row">
        <div className="w-full lg:w-[33%]">
          <Image
            src="/logo (2).png"
            alt="thescenta logo image"
            width={100}
            height={100}
          />

          <div className="mt-3 px-2">
            <h2 className="font-inter text-primary font-bold text-[13px]">
              About Us
            </h2>

            <p className="text-xs font-inter font-semibold leading-5 mt-1.5">
              We believe perfume is more than just a scent; it is a memory, a
              feeling, and a way of expressing who you are. Our goal is to bring
              you carefully selected fragrances that combine elegance, quality,
              and originality, helping you find the perfect perfume for every
              mood and occasion.
            </p>
          </div>
        </div>

        <div className="">
          <h2 className="font-inter text-primary font-bold text-[13px]">
            Quicklinks
          </h2>

          <ul className="flex lg:flex-col gap-3 text-xs mt-4 font-inter font-semibold leading-5">
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
          </ul>
        </div>

        <div>
          <h2 className="font-inter text-primary font-bold text-[13px]">
            Other Informations
          </h2>

          <ul className="flex lg:flex-col gap-4 lg:gap-3 text-xs mt-4 font-inter font-semibold leading-5">
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/orders">Orders</Link>
            </li>
            <li>
              <Link href="/return-policy">Return Policy</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-inter text-primary font-bold text-[13px]">
            Contact Informations
          </h2>

          <div className="flex gap-2 items-center mt-3">
            <Phone className="w-4 h-4" aria-hidden="true" />
            <p className="font-inter text-xs font-bold">+234 70 414 157 67</p>
          </div>

          <div className="flex gap-2 items-center mt-3">
            <Mail className="w-4 h-4" aria-hidden="true" />
            <p className="font-inter text-xs font-bold">
              thescenta.contact@gmail.com
            </p>
          </div>

          <div className="flex gap-2 items-center mt-3">
            <MapPinned className="w-4 h-4" aria-hidden="true" />
            <p className="font-inter text-xs font-bold">Lagos, Nigeria</p>
          </div>

          <div className="mt-6">
            <h2 className="font-inter text-primary font-bold text-[13px]">
              Follow Us
            </h2>

            <div className="mt-2 flex gap-4">
              <Link href="#">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg"
                  alt="instagram logo"
                  width={20}
                  height={20}
                />
              </Link>

              <Link href="#">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg"
                  alt="facebook logo"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-3 py-2 flex justify-between flex-col lg:flex-row lg:items-stretch items-center gap-2">
        <p className="text-xs font-inter font-bold">
          &copy; 2025 Thescenta. All Rights Reserved
        </p>
        <div className="text-xs font-inter font-bold flex gap-2 items-center">
          <p>Developer -</p>
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/x.svg"
            alt=""
            width={15}
            height={15}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
