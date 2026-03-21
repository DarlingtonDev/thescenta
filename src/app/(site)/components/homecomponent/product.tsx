import { Eye, Heart, ShoppingBasket } from "lucide-react";
import Image from "next/image";
const ProductCard = () => {
  return (
    <div className="w-[48%] lg:w-[24%] min-h-fit lg:min-h-80 border border-gray-200 px-3 py-3 relative rounded-sm lg:rounded-none">
      <button className="cursor-pointer" aria-label="Add to wishlist">
        <Heart className="absolute right-6 top-4 text-primary  lg:w-5 lg:h-5 w-4 h-4" />
      </button>
      <div className="w-full max-w-[500px]">
        <Image
          src="/burbery.webp"
          alt="Burberry Perfume"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="flex justify-end mt-1 font-inter text-xs  text-green-600 px-1.5 py-0.5 ">
        <p>New Stock</p>
      </div>

      <h2 className="mt-2 font-inter text-[12px] font-medium overflow-ellipsis overflow-hidden whitespace-nowrap">
        Paris Corner Burberry Goddess EDP 100ml
      </h2>

      <h2 className="mt-1 font-inter font-black lg:font-bold text-[13px] lg:text-sm text-gray-900">
        ₦54,000.00
      </h2>

      <div className="flex items-center justify-betweeen mt-3 gap-3.5">
        {/* <button className="w-[60%] lg:w-[40%] bg-primary text-white text-xs py-2 lg:py-1.5 ">
          Buy Now
        </button> */}

        <button
          className=" text-xs py-1.5 rounded-sm border border-gray-300 px-4 cursor-pointer"
          aria-label="Add to cart"
        >
          <ShoppingBasket className="w-4 h-4" />
        </button>
        <button
          className="cursor-pointer text-xs py-1.5 rounded-sm border border-gray-300 px-4"
          aria-label="Visit product"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
