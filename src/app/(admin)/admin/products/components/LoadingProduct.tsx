import React from "react";

const LoadingProduct = () => {
  return (
    <div className="ml-[15%] px-6 w-[85%] bg-gray-50 mt-14 py-6 animate-pulse">
      <div className="flex justify-between items-center font-inter">
        <div className="h-4 w-32 bg-gray-300 rounded"></div>
        <div className="flex gap-x-3 items-center">
          <div className="h-7 w-16 bg-gray-300 rounded"></div>
          <div className="h-7 w-28 bg-gray-300 rounded"></div>
        </div>
      </div>

      <form className="flex gap-x-4 mt-6">
        {/* Left Section */}
        <div className="w-[50%] flex flex-col gap-y-6">
          {/* Description */}
          <div>
            <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
            <div className="bg-white border border-gray-200 rounded-md p-4 flex flex-col gap-y-3">
              <div className="h-3 w-32 bg-gray-200 rounded"></div>
              <div className="h-9 w-full bg-gray-200 rounded"></div>
              <div className="h-3 w-20 bg-gray-200 rounded mt-3"></div>
              <div className="h-24 w-full bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Category + Brand */}
          <div>
            <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
            <div className="bg-white border border-gray-200 rounded-md p-4 flex flex-col gap-y-4">
              <div className="h-9 w-full bg-gray-200 rounded"></div>
              <div className="h-9 w-full bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Inventory */}
          <div>
            <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
            <div className="bg-white border border-gray-200 rounded-md p-4 flex gap-x-4">
              <div className="h-9 w-full bg-gray-200 rounded"></div>
              <div className="h-9 w-full bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[50%] flex flex-col gap-y-6">
          {/* Image */}
          <div>
            <div className="h-4 w-28 bg-gray-300 rounded mb-2"></div>
            <div className="bg-white border border-gray-200 rounded-md p-4">
              <div className="h-24 w-24 bg-gray-200 rounded-md"></div>
            </div>
          </div>

          {/* Shipping */}
          <div>
            <div className="h-4 w-36 bg-gray-300 rounded mb-2"></div>
            <div className="bg-white border border-gray-200 rounded-md p-4">
              <div className="h-9 w-full bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Pricing */}
          <div>
            <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
            <div className="bg-white border border-gray-200 rounded-md p-4 flex gap-x-4">
              <div className="h-9 w-full bg-gray-200 rounded"></div>
              <div className="h-9 w-full bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoadingProduct;
