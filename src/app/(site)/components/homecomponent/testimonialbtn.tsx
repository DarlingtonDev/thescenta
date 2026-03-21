"use client";
import { useEffect, useState } from "react";

const Testimonialbtn = ({ domclass }: { domclass: string }) => {
  const [scrollLeft, setScrollLeft] = useState(0);
  useEffect(() => {
    const domElem = document.querySelector("." + domclass);
    if (domElem) {
      domElem.addEventListener("scroll", () => {
        console.log(scrollLeft);
        setScrollLeft(domElem.scrollLeft);
      });
    }
  }, [scrollLeft]);
  const Activebtn = () => {
    return (
      <button
        className="w-4 h-4 border border-primary cursor-pointer flex justify-center items-center rounded-[50%]"
        aria-label="move to middle slide"
      >
        <div className="w-2.5 h-2.5 rounded-[50%] bg-primary "></div>
      </button>
    );
  };
  return (
    <div className="flex space-x-1.5 mt-4 items-center self-center lg:hidden">
      {scrollLeft <= 81 ? (
        <Activebtn />
      ) : (
        <button
          className="w-4 h-4 flex justify-center items-center cursor-pointer"
          aria-label="moved to second slide"
        >
          <div className="w-2.5 h-2.5 rounded-[50%] bg-gray-200"></div>
        </button>
      )}

      {scrollLeft > 81 && scrollLeft <= 500 ? (
        <Activebtn />
      ) : (
        <button
          className="w-4 h-4 flex justify-center items-center cursor-pointer"
          aria-label="moved to second slide"
        >
          <div className="w-2.5 h-2.5 rounded-[50%] bg-gray-200"></div>
        </button>
      )}

      {scrollLeft >= 500 ? (
        <Activebtn />
      ) : (
        <button
          className="w-4 h-4 flex justify-center items-center cursor-pointer"
          aria-label="moved to last slide"
        >
          <div className="w-2.5 h-2.5 rounded-[50%] bg-gray-200"></div>
        </button>
      )}
    </div>
  );
};

export default Testimonialbtn;
