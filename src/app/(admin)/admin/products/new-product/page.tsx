"use client";
import {
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  Image as ImgLucide,
  X,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import "react-quill-new/dist/quill.snow.css";
import Brands from "../../../../../../lib/brands";
import Image from "next/image";
import Link from "next/link";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
const NewProduct = () => {
  const [value, setValue] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const imageviewUploader = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImage(previewUrl);
    }
  };
  return (
    <div className="w-full lg:ml-[15%] lg:w-[85%] px-4 sm:px-6 bg-gray-50 mt-14 py-6">
      <Link
        href="/admin/products"
        className="underline text-[13px] font-medium text-primary flex items-center "
      >
        <ChevronLeft className="w-5 h-5" />
        Back to products
      </Link>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 font-inter mt-4">
        <h2 className="font-semibold text-[15px]">Add Product</h2>
        <div className="flex flex-wrap gap-2 sm:gap-x-4 text-[13px] capitalize font-bold">
          <button
            type="submit"
            className="bg-primary px-5 text-white py-1.5 cursor-pointer rounded-md"
            name="action"
            value="save"
          >
            Save
          </button>
          <button
            type="submit"
            className="bg-gray-600 px-5 text-white py-0.5 rounded-md cursor-pointer"
            name="action"
            value="draft"
          >
            Draft
          </button>
        </div>
      </div>

      <form className="flex flex-col lg:flex-row gap-4 mt-6">
        <div className="w-full lg:w-[50%]">
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

            <div className="bg-white border border-gray-200 w-full rounded-md px-3 py-4 mt-2 font-inter font-medium flex flex-col sm:flex-row gap-4">
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

        <div className="w-full lg:w-[50%]">
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
                  {image && <img src={image} alt="product-image" />}

                  <input
                    type="file"
                    placeholder="Upload image"
                    id="file-upload"
                    className="outline-0 border border-gray-200  px-3 py-2.5 rounded-md font-inter text-xs hidden"
                    name="image"
                    accept="image/*"
                    onChange={imageviewUploader}
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

            <div className="bg-white border border-gray-200 w-full rounded-md px-3 py-4 mt-2 font-inter font-medium flex flex-col sm:flex-row gap-4">
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
      </form>
    </div>
  );
};

export default NewProduct;
