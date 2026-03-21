import { Aperture, ChevronDown, ListFilterPlus, Star } from "lucide-react";
import Image from "next/image";
import Pagination from "../components/categoriesComponent/pagination";
import Link from "next/link";

const Offers = () => {
  const OfferProducts = () => {
    return (
      <div className="lg:min-h-96 border border-gray-200 w-[48%] lg:w-[24%] relative py-4 lg:py-0">
        <div className="absolute top-1.5 right-2 lg:top-3 lg:right-3 bg-green-500 text-xs font-inter font-bold text-snow px-0.5 rounded-[50%] py-3 ">
          Promo
        </div>
        <Image
          src="/burbery.webp"
          alt=""
          width={500}
          height={500}
          className="w-full h-auto"
        />

        <div className="px-2">
          <h2 className="font-inter text-xs font-medium antialiased overflow-ellipsis whitespace-nowrap overflow-hidden">
            Paris Corner Burberry Goddess EDP 100ml
          </h2>

          <div className="flex gap-2 mt-1 items-baseline">
            <h2 className="font-inter text-[13px] font-semibold antialiased overflow-ellipsis whitespace-nowrap overflow-hidden">
              ₦50,000.00
            </h2>
            <p className="font-inter text-xs line-through text-gray-500 antialiased overflow-ellipsis whitespace-nowrap overflow-hidden">
              ₦54,000.00
            </p>
          </div>

          <button className="mt-2 bg-primary/80 text-snow lg:py-1.5  py-2.5 px-3.5 font-inter text-xs font-medium">
            Buy now
          </button>
        </div>
      </div>
    );
  };
  return (
    <section className="min-h-96 lg:px-14 px-3 mt-8">
      <div className="font-inter text-xs font-medium text-gray-700 max-w-[60%] mt-1">
        <Link href="/">Home</Link> &gt; Offers
      </div>
      <div className="flex gap-1.5 items-baseline py-0 mt-3">
        <h1 className="font-inter font-bold text-xl">Perfume Offers</h1>
        <h2 className="font-inter text-xs font-medium">(228 Products)</h2>
      </div>

      <div className="min-h-48 border border-gray-200 mt-6 rounded-md bg-[url('/hero1.png')] bg-brown bg-no-repeat bg-center lg:bg-right relative">
        <div className="absolute lg:hidden  w-full h-full bg-black/40 rounded-md"></div>
        <div className="absolute w-full h-full py-4 px-4  rounded-md">
          <div className="flex gap-1 items-center">
            <Aperture className="w-4 h-4 text-white" />
            <p className="font-bold font-inter text-[13px] text-white">Promo</p>
          </div>

          <h2 className="mt-2 font-inter font-black text-xl text-white ">
            Enjoy Free Delivery On <br className="hidden lg:block" /> Orders
            Above ₦250,000
          </h2>
          <p className="mt-3 lg:max-w-[35%] font-medium font-inter text-[13px] text-white">
            Get the best deals, fast shipping, and a seamless shopping
            experience. All at unbeatable value.
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap w-full gap-x-2 gap-y-4 ">
        <OfferProducts />
        <OfferProducts />
        <OfferProducts />
        <OfferProducts />
        <OfferProducts />
        <OfferProducts />
        <OfferProducts />
        <OfferProducts />
        <OfferProducts />
        <OfferProducts />
        <OfferProducts />
        <OfferProducts />
        <OfferProducts />
        <OfferProducts />
        <OfferProducts />
        <OfferProducts />
      </div>

      <Pagination />
    </section>
  );
};

export default Offers;
