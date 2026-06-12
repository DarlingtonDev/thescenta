import { ChevronDown, EllipsisIcon, Search } from "lucide-react";
import formatNumber from "../../../../../lib/format";
import Pagination from "@/app/(site)/components/categoriesComponent/pagination";
import DateFilterInput from "../../components/DateFilterInput";

const Order = () => {
  const OrderList = () => {
    return (
      <>
        <div className="lg:hidden border-b border-gray-200 px-4 py-3 font-inter">
          <div className="flex items-start justify-between gap-2">
            <p className="text-[11px] font-inter font-medium line-clamp-2 flex-1">
              Adamu Yusuf Babangida
            </p>
            <EllipsisIcon className="w-4 h-4 shrink-0" />
          </div>
          <div className="mt-2 space-y-1 text-[11px] font-inter font-medium">
            <p>
              <span className="text-gray-500">Order ID: </span>#100037656243
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <p>
                <span className="text-gray-500">Amount: </span>₦185,000
              </p>
              <p>
                <span className="text-gray-500">Status: </span>Completed
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-full border-b border-gray-200 mt-2 font-inter py-1 items-center">
          <div className="w-[25%] px-2">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium">
              Adamu Yusuf Babangida
            </p>
          </div>

          <div className="w-[25%] px-2">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium">
              #100037656243
            </p>
          </div>

          <div className="w-[15%] px-2">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium">
              ₦185,000
            </p>
          </div>
          <div className="w-[15%] px-2">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium">
              Completed
            </p>
          </div>
          <div className="w-[20%] flex justify-center px-2">
            <EllipsisIcon className="w-4 h-4" />
          </div>
        </div>
      </>
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
      <div className="w-full sm:w-[calc(50%-0.375rem)] lg:w-[24%] border-b sm:border-b-0 sm:border-r px-3 border-gray-200 font-inter py-3">
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
    <div className="w-full lg:ml-[15%] lg:w-[85%] px-4 sm:px-6 bg-gray-50 mt-14 py-6">
      <div>
        <h2 className="font-inter text-lg font-semibold">Orders List</h2>
        <p className="font-inter text-xs font-medium text-gray-600 ">
          Here you can find and manage all your orders
        </p>
      </div>

      <div className="flex flex-wrap gap-3 items-stretch mt-6 border-b border-gray-200 py-4 bg-white">
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
        <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-3 py-3 border-b border-b-gray-300">
          <form action="" className="relative w-full lg:w-[40%]">
            <input
              type="text"
              className="w-full sm:w-60 px-6 rounded-md text-xs font-inter font-medium border border-gray-200 outline-0 py-1.5"
              placeholder="Search"
            />
            <Search className="w-4 h-4 absolute top-1/2 -translate-y-1/2 left-1" />
          </form>

          <div className="w-full lg:w-[60%] flex flex-wrap gap-2 sm:gap-x-3 items-center lg:justify-end">
            <div className="relative w-full sm:w-auto sm:min-w-[140px]">
              <select className="w-full px-4 py-1 pr-8 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter text-xs appearance-none bg-white">
                <option value="">All Status</option>

                <option></option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            <div className="w-full sm:w-auto">
              <div className="flex flex-wrap gap-2 sm:gap-x-3">
                <DateFilterInput label="From" />
                <DateFilterInput label="To" />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex border-b border-gray-300 w-full font-inter text-xs font-medium py-3 items-center bg-gray-100">
          <div className="w-[25%] flex px-2">
            <p>Customer Name</p>
          </div>

          <div className="w-[25%] flex px-2">
            <p>Order ID</p>
          </div>

          <div className="w-[15%] flex px-2">
            <p>Amount</p>
          </div>

          <div className="w-[15%] flex px-2">
            <p>Status</p>
          </div>

          <div className="w-[20%] flex px-2 justify-center">
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
