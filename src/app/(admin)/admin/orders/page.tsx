import { ChevronDown, EllipsisIcon, Search } from "lucide-react";
import formatNumber from "../../../../../lib/format";
import Image from "next/image";
import Pagination from "@/app/(site)/components/categoriesComponent/pagination";
const Order = () => {
  const OrderList = () => {
    return (
      <div className="w-full flex border-b border-gray-200 mt-2 font-inter py-1  items-center">
        <div className="flex gap-x-2 px-2 items-center w-[20%]">
          <div className="w-[20%] shrink-0">
            <Image
              src="/burbery.webp"
              alt="burbery"
              width={500}
              height={500}
              className="w-full h-auto "
            />
          </div>

          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium w-[80%] ">
            Paris Corner Burberry Goddess EDP 100ml
          </p>
        </div>

        <div className="w-[20%]   px-2">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium">
            Adamu Yusuf Babangida
          </p>
        </div>

        <div className="w-[20%]   px-2">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium">
            #100037656243
          </p>
        </div>

        <div className="w-[15%]   px-2">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium">
            ₦185,000
          </p>
        </div>
        <div className="w-[15%]   px-2">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium">
            Completed
          </p>
        </div>
        <div className="w-[10%]  flex justify-center px-2">
          <EllipsisIcon className="w-4 h-4" />
        </div>
      </div>
    );
  };

  const OrderCard = ({
    title,
    amount,
    color,
    subtitle,
  }: {
    title: string;
    amount: number;
    color: string;
    subtitle?: string;
  }) => {
    return (
      <div className="w-[24%] border-r px-3 border-gray-200 font-inter  py-3">
        <p className="text-xs font-medium text-gray-600">{title}</p>

        <div className="flex gap-x-3 items-center mt-1">
          <h2 className="font-inter text-lg font-medium ">
            {formatNumber(amount)}
          </h2>

          <div className={`w-4 h-1 bg-${color}`}></div>
        </div>

        <p className="text-[11px] font-medium text-gray-400 mt-0.5">
          {subtitle ? subtitle : "Total orders in the last 365 days"}
        </p>
      </div>
    );
  };

  return (
    <div className="ml-[15%] px-6 w-[85%] bg-gray-50 mt-14 py-6">
      <div>
        <h2 className="font-inter text-lg font-semibold">Orders List</h2>
        <p className="font-inter text-xs font-medium text-gray-600 ">
          Here you can find and manage all your orders
        </p>
      </div>

      <div className="flex gap-x-3 items-center mt-6 border-b border-gray-200 py-4 bg-white">
        <OrderCard title="Total Orders" amount={240120} color="teal-600" />
        <OrderCard
          title="New Orders"
          amount={300}
          color="primary"
          subtitle="Total orders in the current month"
        />
        <OrderCard title="Completed Orders" amount={213540} color="teal-600" />
        <OrderCard title="Cancelled Orders" amount={1430} color="primary" />
      </div>

      <div className="mt-5 w-full min-h-96 rounded-md bg-white px-4 py-5">
        <div className=" w-full flex items-center justify-between py-3 border-b border-b-gray-300">
          <form action="" className="relative w-[40%]">
            <input
              type="text"
              className="w-60 px-6 rounded-md text-xs font-inter font-medium border border-gray-200 outline-0 py-1.5"
              placeholder="Search"
            />
            <Search className="w-4 h-4 absolute top-1/2 -translate-y-1/2 left-1" />
          </form>

          <div className="w-[60%] flex gap-x-3 items-center justify-end">
            <div className="relative w-[20%]">
              <select className="w-full px-4 py-1 pr-8 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter text-xs appearance-none bg-white">
                <option value="">All Status</option>

                <option></option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            <div className="">
              <form action="" className="flex gap-x-3">
                <input
                  type="date"
                  name=""
                  id=""
                  className="px-6 rounded-md text-xs font-inter font-medium border border-gray-200 outline-0 py-1.5"
                />

                <input
                  type="date"
                  name=""
                  id=""
                  className="px-6 rounded-md text-xs font-inter font-medium border border-gray-200 outline-0 py-1.5"
                />
              </form>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-300 flex w-full font-inter text-xs font-medium py-3 items-center bg-gray-100">
          <div className="w-[20%] flex px-2 gap-x-2 items-center ">
            <p>Product Name</p>
          </div>

          <div className="w-[20%] flex px-2 ">
            <p>Customer Name</p>
          </div>

          <div className="w-[20%] flex px-2   ">
            <p>Order ID</p>
          </div>

          <div className="w-[15%] flex px-2  ">
            <p>Amount</p>
          </div>

          <div className="w-[15%] flex px-2  ">
            <p>Status</p>
          </div>

          <div className="w-[10%] flex px-2  justify-center ">
            <p>Action</p>
          </div>
        </div>

        <div className="w-full">
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
        </div>

        <Pagination />
      </div>
    </div>
  );
};

export default Order;
