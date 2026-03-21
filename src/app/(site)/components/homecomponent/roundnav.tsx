"use client";

import { useContext } from "react";
import { Navcontext } from "../../contextApi/context";

const Roundnav = () => {
  const context = useContext(Navcontext);
  if (!context) return null;

  const { scrollPosition } = context;
  return (
    <div className="flex space-x-1.5 mt-4 items-center self-center">
      <button
        className={`w-4 h-4  ${
          scrollPosition === "initial" && "border border-primary"
        }  cursor-pointer flex justify-center items-center rounded-[50%]`}
        aria-label="go back"
      >
        <div
          className={`w-2.5 h-2.5 rounded-[50%] ${
            scrollPosition === "initial" ? "bg-primary" : "bg-gray-200"
          } `}
        ></div>
      </button>

      <button
        className={`cursor-pointer rounded-[50%] ${
          scrollPosition === "final" && "border border-primary"
        } w-4 h-4 flex justify-center items-center`}
        aria-label="fetch more products"
      >
        <div
          className={`w-2.5 h-2.5 rounded-[50%] ${
            scrollPosition === "final" ? "bg-primary" : "bg-gray-200"
          }`}
        ></div>
      </button>
    </div>
  );
};

export default Roundnav;
