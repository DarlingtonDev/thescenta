import { EllipsisIcon } from "lucide-react";

const Loading = () => {
  return (
    <div className="ml-[15%] px-6 w-[85%] bg-gray-50 mt-14 py-6 animate-pulse">
      <div className="w-full min-h-96 bg-white border border-gray-300 rounded-md">
        {/* Header */}
        <div className="flex items-center justify-between py-4 font-inter px-4">
          <div className="h-4 w-24 bg-gray-200 rounded"></div>

          <div className="flex items-center gap-x-4 w-[40%] justify-end">
            <div className="h-8 w-20 bg-gray-200 rounded"></div>
            <div className="h-8 w-28 bg-gray-200 rounded"></div>
            <div className="h-8 w-20 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Table Header */}
        <div className="border-t border-gray-200 flex w-full font-inter text-xs font-medium text-gray-600 py-3 items-center">
          <div className="w-[35%] flex px-2 gap-x-2 items-center">
            <input type="checkbox" className="cursor-pointer" />
            <p>Product Name</p>
          </div>
          <div className="w-[15%] flex px-2">
            <p>Price</p>
          </div>
          <div className="w-[20%] flex px-2">
            <p>Category</p>
          </div>
          <div className="w-[10%] flex px-2">
            <p>Status</p>
          </div>
          <div className="w-[10%] flex px-2">
            <p>Quantity</p>
          </div>
          <div className="w-[10%] flex px-2 justify-center">
            <p>Action</p>
          </div>
        </div>

        {/* Skeleton Rows */}
        <div className="flex flex-col w-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-full flex border-t border-gray-200 font-inter py-2 items-center"
            >
              <div className="flex gap-x-2 px-2 items-center w-[35%]">
                <input type="checkbox" />
                <div className="w-[10%] h-10 bg-gray-200 rounded shrink-0"></div>
                <div className="w-[80%] h-4 bg-gray-200 rounded"></div>
              </div>

              <div className="w-[15%] px-2">
                <div className="h-4 w-12 bg-gray-200 rounded"></div>
              </div>

              <div className="w-[20%] px-2">
                <div className="h-4 w-20 bg-gray-200 rounded"></div>
              </div>

              <div className="w-[10%] px-2">
                <div className="h-4 w-12 bg-gray-200 rounded"></div>
              </div>

              <div className="w-[10%] px-2">
                <div className="h-4 w-10 bg-gray-200 rounded"></div>
              </div>

              <div className="w-[10%] flex justify-center px-2">
                <EllipsisIcon className="w-4 h-4 text-gray-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Placeholder */}
      <div className="-mt-2 flex justify-center py-4">
        <div className="h-6 w-32 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default Loading;
