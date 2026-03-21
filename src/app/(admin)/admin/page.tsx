"use client";
import {
  ArrowDown,
  ArrowUp,
  Ellipsis,
  EllipsisIcon,
  Funnel,
} from "lucide-react";
import formatNumber from "../../../../lib/format";
import Image from "next/image";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";
import dynamic from "next/dynamic";
import ProductsAdmin from "../components/productAdmin";

const PiechartClient = dynamic(() => import("../components/piechart"), {
  ssr: false,
});

const AdminHome = () => {
  const data = [
    { month: "Jan", sales: 120000 },
    { month: "Feb", sales: 150000 },
    { month: "Mar", sales: 160000 },
    { month: "Apr", sales: 100000 },
    { month: "May", sales: 250000 },
    { month: "Jun", sales: 300000 },
  ];

  interface SalesCard {
    type: string;
    amount: string;
    percentage: number;
    difference: "increase" | "decrease";
  }
  const SalesCard = ({ type, amount, percentage, difference }: SalesCard) => {
    const Percentage = () => {
      return (
        <div
          className={`flex ${
            difference === "increase"
              ? "text-green-600 bg-green-400/20"
              : "text-red-600 bg-red-400/20"
          }  w-fit items-center font-inter  text-[11px] px-0.5 gap-x-0.5`}
        >
          {difference === "increase" ? (
            <ArrowUp className="w-3 h-3" />
          ) : (
            <ArrowDown className="w-3 h-3" />
          )}
          <p className="">{percentage}%</p>
        </div>
      );
    };
    return (
      <div className=" w-[24%] border border-gray-300 bg-white rounded-md py-4 px-3 ">
        <div className="w-full flex justify-between items-center font-inter text-gray-500 text-[11px] font-medium">
          <p>{type}</p>
          <Ellipsis className="w-4 h-4 text-black" />
        </div>

        <h2 className="mt-3 text-lg font-bold font-inter">
          {type === "Total Sales" || type === "Total Revenue"
            ? "₦" + formatNumber(amount)
            : amount}
        </h2>

        <div className="mt-4 w-full flex gap-x-2">
          <Percentage />
          <p className="font-inter text-gray-500 text-[11px]">
            in the last month
          </p>
        </div>
      </div>
    );
  };

  const Channels = () => {
    return (
      <div className="flex w-full justify-between items-center font-inter text-[11px] font-medium text-gray-800">
        <div className="items-center flex gap-x-1">
          <div
            className="w-1.5 h-1.5 rounded-[50%]"
            style={{ backgroundColor: "#0088FE" }}
          ></div>
          <p>Website</p>
        </div>

        <p className="font-semibold">₦{formatNumber(1200000)}</p>
      </div>
    );
  };

  const SalesByRegion = ({
    region,
    percentage,
  }: {
    region: string;
    percentage: string;
  }) => {
    return (
      <div className="w-full font-inter text-[11px] font-medium">
        <div className="flex justify-between items-center text-gray-600">
          <p>{region}</p>
          <p>{percentage}</p>
        </div>
        <div className="w-full border border-gray-200 rounded-md mt-1 h-1.5">
          <div
            className="h-full bg-green-500 rounded-md`"
            style={{ width: percentage }}
          ></div>
        </div>
      </div>
    );
  };

  const Target = ({
    type,
    amount,
    level,
  }: {
    type: string;
    amount: string;
    level: "increase" | "decrease";
  }) => {
    return (
      <div className="w-[32%] flex gap-y-2 flex-col items-center mt-4">
        <h2 className="text-gray-600 text-xs">{type}</h2>

        <div className="flex gap-x-1.5 items-center ">
          <h2 className="text-xs text-[13px]">₦{amount}</h2>
          {level === "increase" ? (
            <ArrowUp className="text-green-500 w-4 h-4" />
          ) : (
            <ArrowDown className="text-red-500 w-4 h-4" />
          )}
        </div>
      </div>
    );
  };
  return (
    <div className="ml-[15%] px-4 w-[85%] bg-gray-50 mt-14 py-3">
      <div className="w-full flex gap-x-4 items-center py-4">
        <SalesCard
          type="Total Sales"
          amount="350000"
          percentage={14}
          difference="increase"
        />
        <SalesCard
          type="Total Order"
          amount="25"
          percentage={17}
          difference="decrease"
        />
        <SalesCard
          type="Total Revenue"
          amount="50000"
          percentage={14}
          difference="increase"
        />
        <SalesCard
          type="Total Customers"
          amount="10"
          percentage={11}
          difference="decrease"
        />
      </div>

      <div className="flex gap-x-3">
        <div className="w-[60%] border min-h-64 bg-white border-gray-300 rounded-md px-3 py-4 font-inter text-[11px]">
          <div className="flex items-center gap-x-5">
            <p className=" text-sm font-semibold">Sales</p>

            <div className="w-[1px] h-4 rounded-4xl bg-gray-300"></div>

            <div className="flex gap-x-1 items-center">
              <div className="w-1 h-1 bg-green-500 rounded-[50%]"></div>
              <p>
                Current Month: <span className="font-semibold">₦185,000</span>
              </p>
            </div>

            <div className="flex gap-x-1 items-center">
              <div className="w-1 h-1 bg-gray-500 rounded-[50%]"></div>
              <p>
                Previous Month: <span className="font-semibold">₦105,000</span>
              </p>
            </div>
          </div>

          <div className="w-full  mt-6 h-60">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#4CAF50"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="w-[20%] border bg-white border-gray-300 rounded-md px-4 py-4">
          <h2 className="font-inter font-semibold text-sm">
            Sales By Location
          </h2>

          <div className="w-full h-30 mt-3 relative">
            <div className="w-1.5 h-1.5 top-10 left-6 absolute rounded-[50%] bg-black z-20"></div>
            <div className="w-1.5 h-1.5 absolute rounded-[50%] bg-black z-20 top-1/2 -translate-y-1/2 left-1/2"></div>
            <div className="w-1.5 h-1.5 absolute rounded-[50%] bg-black z-20 top-1/2 left-12"></div>
            <Image src="/map.jpg" alt="map" fill className="object-cover" />
          </div>

          <div className="w-full mt-4 flex flex-col gap-y-2">
            <SalesByRegion region="Lagos" percentage="43%" />
            <SalesByRegion region="Abuja" percentage="20%" />
            <SalesByRegion region="Calabar" percentage="25%" />
            <SalesByRegion region="Ogun" percentage="13%" />
          </div>
        </div>

        <div className="w-[20%] border bg-white border-gray-300 rounded-md p-4">
          <h2 className="font-inter font-semibold text-sm">Total Sales</h2>

          <div className="min-h-[120px]">
            <PiechartClient />
          </div>

          <div className="w-full mt-8 flex flex-col gap-y-5 px-1">
            <Channels />
            <Channels />
            <Channels />
            <Channels />
          </div>
        </div>
      </div>

      <div className="mt-6 w-full flex pb-4 gap-x-3">
        <div className="w-[65%] border border-gray-300  rounded-md bg-white">
          <div className="flex items-center justify-between p-3">
            <h2 className="font-semibold font-inter text-sm">
              Recent Products
            </h2>
            <button className="flex gap-x-1 items-center font-inter text-gray-600 text-[11px] font-medium border rounded-md px-2 py-1 border-gray-200">
              <Funnel className="w-3 h-3" />
              <p>Filter</p>
            </button>
          </div>

          <div className="w-full flex border-t border-gray-200 mt-2 font-inter text-xs text-gray-500 py-1.5 gap-x-2">
            <div className="w-[30%] flex px-2 gap-x-2 items-center ">
              <input type="checkbox" className="cursor-pointer" />
              <p>Product Name</p>
            </div>

            <div className="w-[20%] flex px-2 ">
              <p>Price</p>
            </div>

            <div className="w-[20%] flex px-2  gap-x-2 ">
              <p>Category</p>
            </div>

            <div className="w-[20%] flex px-2  gap-x-2">
              <p>Quantity</p>
            </div>

            <div className="w-[10%] flex px-2  gap-x-2">
              <p>Action</p>
            </div>
          </div>

          <div className="flex flex-col">
            <ProductsAdmin />
            <ProductsAdmin />
            <ProductsAdmin />
            <ProductsAdmin />
            <ProductsAdmin />
            <ProductsAdmin />
          </div>
        </div>

        <div className="w-[35%] border border-gray-300  rounded-md bg-white p-3 relative">
          <div>
            <h2 className="font-semibold font-inter text-sm">Monthly Target</h2>
            <p className="font-inter text-xs mt-2 text-gray-600">
              Target that you have set for this month
            </p>
          </div>

          <svg viewBox="0 0 100 58" className="mt-4 ">
            <path
              d="M10 50 A40 40 0 0 1 90 50"
              fill="none"
              stroke="#dbdddf"
              strokeWidth={5.3}
              strokeLinecap="round"
            />

            <path
              d="M10 50 A30 30 0 0 1 90 50"
              fill="none"
              stroke="#a31621"
              strokeWidth={5.3}
              strokeLinecap="round"
              pathLength={100}
              strokeDasharray="75.34 100"
              strokeDashoffset={0}
            />
          </svg>

          <h2 className="absolute top-40 font-inter tex left-1/2 -translate-x-1/2 text-lg font-semibold">
            75.34%
          </h2>

          <button className="absolute top-48 font-inter tex left-1/2 -translate-x-1/2 text-gray-500 font-semibold text-xs border border-gray-300 px-2 py-1 rounded-sm">
            +12%
          </button>

          <div className="flex w-full flex-col items-center ">
            <p className="text-[13px] text-center text-gray-600 font-inter font-medium">
              You have earned ₦184,500 today. You are ₦435,000 closer to meeting
              your target
            </p>

            <div className="flex w-full border-t border-gray-200 mt-5 py-2  items-center gap-x-4 font-inter font-medium">
              <Target type="Target" amount="700,000" level="decrease" />
              <Target type="Revenue" amount="370,000" level="increase" />
              <Target type="Today" amount="184,500" level="increase" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
