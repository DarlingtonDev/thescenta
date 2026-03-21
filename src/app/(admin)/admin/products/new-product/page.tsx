"use client";
import { ArrowLeft, ChevronDown, Image as ImgLucide, X } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import "react-quill-new/dist/quill.snow.css";
import Brands from "../../../../../../lib/brands";
import Image from "next/image";
import Link from "next/link";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
const NewProduct = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div className="ml-[15%] px-6 w-[85%] bg-gray-50 mt-14 py-6">
      <div className="flex justify-between items-center font-inter">
        <h2 className="font-semibold text-[15px]">Add Product</h2>
      </div>

      <form className="flex gap-x-4 mt-6">
        <div className="w-[50%] ">
          <div className="w-full ">
            <h2 className="text-sm font-inter font-medium">Description</h2>

            <div className="bg-white border border-gray-200 w-full rounded-md px-3 py-4 mt-2 font-inter font-medium  flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-1">
                <label
                  htmlFor=""
                  className="text-[11px] text-gray-600 font-medium"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Paris Corner Edp 100ml"
                  className="outline-0 border border-gray-200  px-3 py-2.5 rounded-md font-inter text-xs"
                  required
                />
              </div>

              <div className="flex flex-col gap-y-1">
                <label
                  htmlFor=""
                  className="text-[11px] text-gray-600 font-medium"
                >
                  Description
                </label>

                <div className="w-full   overflow-hidden">
                  <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={setValue}
                    className="h-full font-inter  overflow-y-auto"
                  />
                  <input
                    type="text"
                    value={value}
                    className="opacity-0"
                    name="description"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-4">
            <h2 className="text-sm font-inter font-medium">Category</h2>

            <div className="bg-white border border-gray-200 w-full rounded-md px-3 py-4 mt-2 font-inter font-medium  flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-1">
                <label
                  htmlFor=""
                  className="text-[11px] text-gray-600 font-medium"
                >
                  Product Category
                </label>
                <div className="relative">
                  <select
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter text-xs appearance-none bg-white"
                    name="category"
                    required
                    defaultValue=""
                  >
                    <option value="Women">Women</option>
                    <option value="Men">Men</option>
                    <option value="Unisex">Unisex</option>
                    <option value="Giftset">Giftset</option>
                    <option value="Offers">Offers</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-1">
              <label
                htmlFor=""
                className="text-[11px] text-gray-600 font-medium"
              >
                Product Brand
              </label>

              <div className="relative">
                <select
                  className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter text-xs appearance-none bg-white"
                  name="brands"
                  required
                  defaultValue=""
                >
                  {Brands.map((brand, index) => (
                    <option value={brand} key={index}>
                      {brand}
                    </option>
                  ))}

                  <option></option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="w-full mt-4">
            <h2 className="text-sm font-inter font-medium">Inventory</h2>

            <div className="bg-white border border-gray-200 w-full rounded-md px-3 py-4 mt-2 font-inter font-medium  flex gap-x-4">
              <div className="flex flex-col gap-y-1">
                <label
                  htmlFor=""
                  className="text-[11px] text-gray-600 font-medium"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  placeholder="10"
                  className="outline-0 border border-gray-200  px-3 py-2.5 rounded-md font-inter text-xs"
                  name="quantity"
                  required
                />
              </div>

              <div className="flex flex-col gap-y-1">
                <label
                  htmlFor=""
                  className="text-[11px] text-gray-600 font-medium"
                >
                  SKU
                </label>

                <input
                  type="text"
                  placeholder="Paris_001-2025"
                  className="outline-0 border border-gray-200  px-3 py-2.5 rounded-md font-inter text-xs"
                  name="sku"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[50%] ">
          <div className="w-full ">
            <h2 className="text-sm font-inter font-medium">Product Image</h2>

            <div className="bg-white border border-gray-200 w-full rounded-md px-3 py-4 mt-2 font-inter font-medium  flex flex-col gap-y-4 ">
              <div className="flex flex-col gap-y-1">
                <label
                  htmlFor=""
                  className="text-[11px] text-gray-600 font-medium"
                >
                  Product Image
                </label>

                <label
                  htmlFor="file-upload"
                  className="w-24 h-24 flex border border-dashed rounded-md mt-2  justify-center items-center"
                >
                  <ImgLucide className="text-gray-600 cursor-pointer" />

                  <input
                    type="file"
                    placeholder="Upload image"
                    id="file-upload"
                    className="outline-0 border border-gray-200  px-3 py-2.5 rounded-md font-inter text-xs hidden"
                    name="image"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="w-full mt-6">
            <h2 className="text-sm font-inter font-medium">
              Shipping And Delivery
            </h2>

            <div className="bg-white border border-gray-200 w-full rounded-md px-3 py-4 mt-2 font-inter font-medium  flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-1">
                <label
                  htmlFor=""
                  className="text-[11px] text-gray-600 font-medium"
                >
                  Weight(kg)
                </label>
                <input
                  type="number"
                  placeholder="0.5"
                  className="outline-0 border border-gray-200  px-3 py-2.5 rounded-md font-inter text-xs"
                  name="weight"
                  step="any"
                  required
                />
              </div>
            </div>
          </div>

          <div className="w-full mt-6">
            <h2 className="text-sm font-inter font-medium">Pricing</h2>

            <div className="bg-white border border-gray-200 w-full rounded-md px-3 py-4 mt-2 font-inter font-medium  flex gap-x-4">
              <div className="flex flex-col gap-y-1">
                <label
                  htmlFor=""
                  className="text-[11px] text-gray-600 font-medium"
                >
                  Cost Price
                </label>
                <input
                  type="number"
                  placeholder="₦185,000"
                  className="outline-0 border border-gray-200  px-3 py-2.5 rounded-md font-inter text-xs"
                  name="price"
                  required
                />
              </div>

              <div className="flex flex-col gap-y-1">
                <label
                  htmlFor=""
                  className="text-[11px] text-gray-600 font-medium"
                >
                  Profit
                </label>

                <input
                  type="number"
                  defaultValue={8000}
                  className="outline-0 border border-gray-200  px-3 py-2.5 rounded-md font-inter text-xs"
                  name="profit"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="hidden" name="action" value="save">
          submit
        </button>
        <button type="submit" className="hidden" name="action" value="draft">
          draft
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
