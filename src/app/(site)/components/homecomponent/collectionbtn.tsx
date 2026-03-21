"use client";
import React, { useContext, useEffect, useState } from "react";

const Collectionbtn = ({ domclass }: { domclass: string }) => {
  const [scrollPosition, setScrollPosition] = useState<"initial" | "final">(
    "initial"
  );
  const [scrollNumber, setScrollNumber] = useState(0);
  useEffect(() => {
    const domElem = document.querySelector("." + domclass);

    if (domElem) {
      const clientWidth = domElem.clientWidth;
      const scrollWidth = domElem.scrollWidth;
      const scrolledToEnd = scrollWidth - clientWidth;
      domElem.addEventListener("scroll", () => {
        setScrollNumber(domElem.scrollLeft);
        console.log(scrollPosition, domElem.scrollLeft, scrolledToEnd);
        if (domElem.scrollLeft >= scrolledToEnd - 70) {
          setScrollPosition("final");
        } else {
          setScrollPosition("initial");
        }
      });
    }
  }, [scrollNumber]);
  return (
    <div
      className="flex space-x-1.5 mt-4 items-center"
      onClick={() =>
        console.log(document.querySelector("." + domclass)?.clientWidth)
      }
    >
      <button
        className={`w-4 h-4  ${
          scrollPosition === "initial" && "border border-primary"
        }  flex justify-center items-center rounded-[50%]`}
        aria-label="slide back"
      >
        <div
          className={`w-2.5 h-2.5 rounded-[50%] ${
            scrollPosition === "initial" ? "bg-primary" : "bg-gray-200"
          } `}
        ></div>
      </button>
      <button
        className={`w-4 h-4 flex justify-center rounded-[50%] ${
          scrollPosition === "final" && "border border-primary"
        } items-center`}
        aria-label="slide forward"
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

export default Collectionbtn;
