import { Heart, Eye } from "lucide-react";
import Image from "next/image";
const OtherProducts = () => {
  const ProductsOtherProduct = () => {
    return (
      <div className="flex border-b border-gray-200 gap-1 px-3 py-2 lg:items-start items-center">
        <Image
          src="/burbery.webp"
          alt="burbery"
          width={500}
          height={500}
          className="w-[50%] h-auto"
        />

        <div className="mt-4  overflow-hidden">
          <h2 className="font-inter text-[11px]  font-medium overflow-hidden overflow-ellipsis whitespace-nowrap">
            Paris Corner Burberry Goddess EDP 100ml
          </h2>

          <p className=" font-inter font-medium text-[11px] text-gray-500">
            Women
          </p>

          <h2 className="font-inter text-xs font-black overflow-hidden overflow-ellipsis whitespace-nowrap mt-0.5 text-primary">
            ₦54,000.00
          </h2>

          <div className="mt-1 text-xs font-inter font-medium py-1 w-full flex items-center gap-3">
            <button
              className="bg-gray-200 px-2 rounded-sm py-1 cursor-pointer"
              aria-label="Add to wishlist"
            >
              <Heart className="w-4 h-4" />
            </button>

            <button
              className=" px-2 rounded-sm py-1 bg-gray-200 cursor-pointer"
              aria-label="View product"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <aside className="w-full lg:w-[20%] border border-gray-200 rounded-sm py-3 px-1.5 ">
      <div className="w-full flex justify-center items-center bg-primary/70 depth text-snow text-[13px] font-inter font-semibold py-3 lg:py-2 rounded-md">
        <p>Perfumes You May Like</p>
      </div>

      <div className="h-fit mt-4 flex flex-col gap-4">
        <ProductsOtherProduct />
        <ProductsOtherProduct />
        <ProductsOtherProduct />
      </div>
    </aside>
  );
};

export default OtherProducts;
