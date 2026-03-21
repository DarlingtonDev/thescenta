import { Heart } from "lucide-react";
import Image from "next/image";

function ProductCard({ button = true }: { button?: boolean }) {
  return (
    <div className="w-[48%] lg:w-[24%] min-h-56 border border-gray-200 px-2 py-2 relative">
      <button
        className="absolute text-primary right-4 top-3 cursor-pointer"
        aria-label="Add to wishlist "
      >
        <Heart className="w-4 h-4" />
      </button>
      <div className="w-full max-w-[500px]">
        <Image
          src="/burbery.webp"
          alt="burbery"
          width={500}
          height={500}
          className="w-full h-auto "
        />
      </div>

      <div className="px-2 mt-2">
        <h2 className="font-inter text-xs font-medium antialiased overflow-ellipsis whitespace-nowrap overflow-hidden">
          Paris Corner Burberry Goddess EDP 100ml
        </h2>

        <p className="font-inter font-semibold text-[12px] mt-1 antialiased">
          ₦54,000.00
        </p>
      </div>

      {button && (
        <button className="cursor-pointer mt-2 w-full bg-primary/80 font-inter text-xs text-white font-medium py-2 lg:py-1.5 rounded-sm">
          Add to cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;
