import { EllipsisIcon } from "lucide-react";
import Image from "next/image";

const ProductsAdmin = () => {
  return (
    <>
      <div className="lg:hidden border-t border-gray-200 px-4 py-3 font-inter">
        <div className="flex items-start justify-between gap-2">
          <div className="flex gap-2 items-center min-w-0 flex-1">
            <input type="checkbox" />
            <div className="w-10 shrink-0 border border-gray-300">
              <Image
                src="/burbery.webp"
                alt="burbery"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <p className="text-[11px] font-inter font-medium text-gray-700 line-clamp-2">
              Paris Corner Burberry Goddess EDP 100ml
            </p>
          </div>
          <EllipsisIcon className="w-4 h-4 shrink-0" />
        </div>
        <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-[11px] font-inter font-medium text-gray-700">
          <p>
            <span className="text-gray-500">Price: </span>₦185,000
          </p>
          <p>
            <span className="text-gray-500">Category: </span>Men Perfume
          </p>
          <p>
            <span className="text-gray-500">Quantity: </span>7 in stock
          </p>
        </div>
      </div>

      <div className="hidden lg:flex w-full border-t border-gray-200 mt-2 font-inter py-1 items-center">
        <div className="flex gap-x-2 px-2 items-center w-[30%]">
          <input type="checkbox" />
          <div className="w-[20%] border border-gray-300 shrink-0">
            <Image
              src="/burbery.webp"
              alt="burbery"
              width={500}
              height={500}
              className="w-full h-auto "
            />
          </div>

          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium w-[80%] text-gray-700">
            Paris Corner Burberry Goddess EDP 100ml
          </p>
        </div>

        <div className="w-[20%] text-gray-700  px-2">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium">
            ₦185,000
          </p>
        </div>

        <div className="w-[20%] text-gray-700  px-2">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium">
            Men Perfume
          </p>
        </div>
        <div className="w-[20%] text-gray-700  px-2">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium">
            7 in stock
          </p>
        </div>
        <div className="w-[10%]  flex justify-center px-2">
          <EllipsisIcon className="w-4 h-4" />
        </div>
      </div>
    </>
  );
};

export default ProductsAdmin;
