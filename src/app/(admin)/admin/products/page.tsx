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
      <div className="w-full flex border-t border-gray-200  font-inter py-2  items-center">
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
    );
  };

  return (
    <div className="ml-[15%] px-6 w-[85%] bg-gray-50 mt-14 py-6">
      <div className="w-full min-h-96 bg-white border border-gray-300 rounded-md">
        <div className="flex items-center justify-between py-4 font-inter px-4">
          <h2 className="text-sm font-medium">Products List</h2>

          <div className="flex items-center gap-x-4 text-sm w-[40%] justify-end">
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

        <div className="border-t border-gray-200 flex w-full font-inter text-xs font-medium text-gray-600 py-3 items-center">
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
