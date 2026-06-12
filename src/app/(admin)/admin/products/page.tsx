import { EllipsisIcon, Funnel, Plus } from "lucide-react";
import ProductsAdmin from "../../components/productAdmin";
import Image from "next/image";
import Pagination from "@/app/(site)/components/categoriesComponent/pagination";
import Link from "next/link";
import formatNumber from "../../../../../lib/format";
import { Suspense } from "react";
import Retrybtn from "./retrybtn";
import Filter from "./filter";
import { redirect } from "next/navigation";
type ProductRowType = {
  imageUrl: string;
  title: string;
  price: number;
  category: string;
  draft: boolean;
  quantity: number;
};

type ProductsType = {
  id: number;
  title: string;
  slug: string;
  draft: boolean;
  description: string;
  category: string;
  brand: string;
  imageUrl: string;
  price: number;
  quantity: number;
  weight: number;
  sku: string;
  viewed: number;
  searched: number;
};

const Products = async () => {
  const ProductsRow = ({
    imageUrl,
    title,
    price,
    category,
    draft,
    quantity,
  }: ProductRowType) => {
    return (
      <>
        <div className="lg:hidden border-t border-gray-200 px-4 py-3 font-inter">
          <div className="flex items-start justify-between gap-2">
            <div className="flex gap-2 items-center min-w-0 flex-1">
              <input type="checkbox" />
              <div className="w-10 shrink-0">
                <Image
                  src={imageUrl}
                  alt="burbery"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-[11px] font-inter font-medium text-gray-700 line-clamp-2">
                {title}
              </p>
            </div>
            <EllipsisIcon className="w-4 h-4 shrink-0" />
          </div>
          <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-[11px] font-inter font-medium text-gray-700">
            <p>
              <span className="text-gray-500">Price: </span>₦{formatNumber(price)}
            </p>
            <p>
              <span className="text-gray-500">Category: </span>
              {category} Perfume
            </p>
            <p>
              <span className="text-gray-500">Status: </span>
              {!draft ? "Active" : "Draft"}
            </p>
            <p>
              <span className="text-gray-500">Quantity: </span>
              {quantity} in stock
            </p>
          </div>
        </div>

        <div className="hidden lg:flex w-full border-t border-gray-200 font-inter py-2 items-center">
          <div className="flex gap-x-2 px-2 items-center w-[35%]">
            <input type="checkbox" />
            <div className="w-[10%] shrink-0">
              <Image
                src={imageUrl}
                alt="burbery"
                width={500}
                height={500}
                className="w-full h-auto "
              />
            </div>

            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium w-[80%] text-gray-700">
              {title}
            </p>
          </div>

          <div className="w-[15%] text-gray-700  px-2">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium">
              ₦{formatNumber(price)}
            </p>
          </div>

          <div className="w-[20%] text-gray-700  px-2">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium">
              {category} Perfume
            </p>
          </div>

          <div className="w-[10%] text-gray-700  px-2">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium">
              {!draft ? "Active" : "Draft"}
            </p>
          </div>
          <div className="w-[10%] text-gray-700  px-2">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium">
              {quantity} in stock
            </p>
          </div>
          <div className="w-[10%]  flex justify-center px-2">
            <EllipsisIcon className="w-4 h-4" />
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="w-full lg:ml-[15%] lg:w-[85%] px-4 sm:px-6 bg-gray-50 mt-14 py-6">
      <div className="w-full min-h-96 bg-white border border-gray-300 rounded-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-4 font-inter px-4">
          <h2 className="text-sm font-medium">Products List</h2>

          <div className="flex flex-wrap items-center gap-2 sm:gap-x-4 text-sm w-full sm:w-auto sm:justify-end">
            <Filter />
            <Link href="/admin/products/new-product">
              <button className="text-xs  bg-primary text-white px-1.5 py-1.5 rounded-sm flex items-center gap-x-1 cursor-pointer">
                <Plus className="w-4 h-4" />
                Add Product
              </button>
            </Link>
            <button className="text-xs  text-primary border border-gray-300 px-2 py-1.5 rounded-sm flex items-center gap-x-1">
              Import
            </button>
          </div>
        </div>

        <div className="hidden lg:flex border-t border-gray-200 w-full font-inter text-xs font-medium text-gray-600 py-3 items-center">
          <div className="w-[35%] flex px-2 gap-x-2 items-center ">
            <input type="checkbox" className="cursor-pointer" />
            <p>Product Name</p>
          </div>

          <div className="w-[15%] flex px-2 ">
            <p>Price</p>
          </div>

          <div className="w-[20%] flex px-2   ">
            <p>Category</p>
          </div>

          <div className="w-[10%] flex px-2   ">
            <p>Status</p>
          </div>

          <div className="w-[10%] flex px-2  ">
            <p>Quantity</p>
          </div>

          <div className="w-[10%] flex px-2  justify-center">
            <p>Action</p>
          </div>
        </div>

        {/* <div className="flex flex-col w-full">
          {products === null ? (
            <div className="text-center mt-16 flex flex-col items-center">
              <p className="font-inter font-semibold text-[13px] text-red-500">
                Network error, check your internet and try again
              </p>
              <Retrybtn />
            </div>
          ) : products.length <= 0 ? (
            <p className="text-center font-inter text-[13px] mt-16 ">
              No product to show
            </p>
          ) : (
            products.map((product) => (
              <Link href={`products/${product.slug}`} key={product.id}>
                <ProductsRow
                  title={product.title}
                  imageUrl={product.imageUrl}
                  quantity={product.quantity}
                  price={product.price}
                  draft={product.draft}
                  category={product.category}
                />
              </Link>
            ))
          )}
        </div> */}
      </div>

      <div className="-mt-2">
        <Pagination />
      </div>
    </div>
  );
};

export default Products;
