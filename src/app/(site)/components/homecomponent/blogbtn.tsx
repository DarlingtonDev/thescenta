"use client";

import { ChevronRight, ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";

const Blogbtn = ({
  domclass,
  position,
  direction,
}: {
  domclass: string;
  position: string;
  direction: "left" | "right";
}) => {
  const [domElem, setDomElem] = useState<HTMLElement | null>(null);
  const [offsetW, setoffsetW] = useState(0);
  useEffect(() => {
    const dom = document.querySelector("." + domclass) as HTMLElement | null;
    if (dom) {
      setDomElem(dom);
      const offset = dom.offsetWidth;
      setoffsetW(offset);
    }
  }, []);

  function slideBlogLeft() {
    if (domElem) {
      domElem.scrollTo({ left: -offsetW, behavior: "smooth" });
    }
  }

  function sllideBlogRight() {
    if (domElem) {
      domElem.scrollTo({ left: offsetW, behavior: "smooth" });
    }
  }
  return (
    <button
      className={`cursor-pointer py-3 lg:hidden ${position} px-3 lg:px-1 rounded-[50%] lg:py-1 bg-gray-200 flex justify-center items-center lg:static absolute z-50`}
      aria-label="slide to the left"
      onClick={direction === "left" ? slideBlogLeft : sllideBlogRight}
    >
      {direction === "left" ? (
        <ChevronLeft className="w-4 h-4" />
      ) : (
        <ChevronRight className="w-4 h-4" />
      )}
    </button>
  );
};

export default Blogbtn;
