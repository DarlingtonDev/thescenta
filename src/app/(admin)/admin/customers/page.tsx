import Pagination from "@/app/(site)/components/categoriesComponent/pagination";
import { EllipsisIcon, PlusCircle, Search } from "lucide-react";

const Customers = () => {
  const CustomerList = () => {
    return (
      <>
        <div className="lg:hidden border-b border-gray-200 px-4 py-3 font-inter bg-white">
          <div className="flex items-start justify-between gap-2">
            <p className="text-[11px] font-inter font-medium text-gray-700 line-clamp-2 flex-1">
              Adamu Yusuf Babangida
            </p>
            <EllipsisIcon className="w-4 h-4 shrink-0" />
          </div>
          <div className="mt-2 space-y-1 text-[11px] font-inter font-medium text-gray-700">
            <p>
              <span className="text-gray-500">Email: </span>
              AdamuYusuf@gmail.com
            </p>
            <p>
              <span className="text-gray-500">Address: </span>
              119 community road ijoko Ogun State
            </p>
            <div className="flex gap-4">
              <p>
                <span className="text-gray-500">Orders: </span>32
              </p>
              <p>
                <span className="text-gray-500">Spent: </span>₦185,000
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-full border-b border-gray-200 font-inter items-center bg-white py-3">
          <div className="flex gap-x-2 px-2 items-center w-[25%] ">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium w-[80%] text-gray-700">
              Adamu Yusuf Babangida
            </p>
          </div>

          <div className="w-[25%]   px-2">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium text-gray-700">
              AdamuYusuf@gmail.com
            </p>
          </div>

          <div className="w-[25%] flex ">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium text-gray-700">
              119 community road ijoko Ogun State
            </p>
          </div>

          <div className="w-[8%]  px-2">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium text-gray-700">
              32
            </p>
          </div>
          <div className="w-[8%]   px-2 ">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium text-gray-700">
              ₦185,000
            </p>
          </div>
          <div className="w-[8%]  flex justify-center px-2 ">
            <EllipsisIcon className="w-4 h-4" />
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="w-full lg:ml-[15%] lg:w-[85%] px-4 sm:px-6 bg-gray-50 mt-14 py-6">
      <div className="">
        <h2 className="font-inter text-sm font-medium">Customers (300)</h2>

        <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-x-3">
          <button className="flex gap-x-2 font-inter rounded-sm text-[11px] font-medium border border-gray-300 px-2 py-1.5 bg-primary text-white w-fit">
            <PlusCircle className="w-4 h-4" />
            Add New Customer
          </button>

          <form action="" className="relative w-full sm:w-auto sm:flex-1 sm:max-w-md">
            <input
              type="text"
              className="w-full sm:w-60 px-6 rounded-md text-xs font-inter font-medium border border-gray-200 outline-0 py-1.5 bg-white"
              placeholder="Search"
            />
            <Search className="w-4 h-4 absolute top-1/2 -translate-y-1/2 left-1 " />
          </form>
        </div>

        <div className="w-full bg-white mt-4 border border-gray-300 rounded-md">
          <div className="hidden lg:flex border-b border-gray-300 w-full font-inter text-xs font-medium py-3 items-center">
            <div className="w-[25%] flex px-2 gap-x-2 items-center ">
              <p>Customer Name</p>
            </div>

            <div className="w-[25%] flex px-2 ">
              <p>Email Address</p>
            </div>

            <div className="w-[25%] flex px-2 ">
              <p>Shipping Address</p>
            </div>

            <div className="w-[8%] flex px-2  ">
              <p>Orders</p>
            </div>

            <div className="w-[8%] flex px-2  ">
              <p>Spent</p>
            </div>

            <div className="w-[8%] flex px-2  justify-center ">
              <p>Action</p>
            </div>
          </div>

          <div className="w-full">
            <CustomerList />
            <CustomerList />
            <CustomerList />
            <CustomerList />
            <CustomerList />
            <CustomerList />
            <CustomerList />
            <CustomerList />
            <CustomerList />
            <CustomerList />
            <CustomerList />
            <CustomerList />
            <CustomerList />
          </div>
        </div>

        <div className="-mt-4">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Customers;
