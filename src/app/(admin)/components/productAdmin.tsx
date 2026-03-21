import { EllipsisIcon } from "lucide-react";
import Image from "next/image";
const ProductsAdmin = () => {
  return (
    <div className="w-full flex border-t border-gray-200 mt-2 font-inter py-1  items-center">
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
  );
};

export default ProductsAdmin;
