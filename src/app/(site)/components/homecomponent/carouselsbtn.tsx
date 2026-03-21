"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Navcontext } from "../../contextApi/context";

const Carouselsbtn = () => {
  const [newArrivals, setNewArrivals] = useState<HTMLElement | null>(null);
  const [productCard, setproductCard] = useState<HTMLElement | null>(null);
  const context = useContext(Navcontext);
  useEffect(() => {
    const arrivals: HTMLElement | null =
      document.querySelector(".new-arrivals");
    const product: HTMLElement | null = document.querySelector(".product-card");

    setNewArrivals(arrivals);
    setproductCard(product);
  }, [newArrivals, productCard]);

  if (!context) return null;

  const { scrollPosition, setScrollPosition } = context;

  function SlideForward() {
    if (newArrivals) {
      const scrollWidth = newArrivals?.offsetWidth;

      if (productCard) {
        newArrivals.scrollTo({ left: scrollWidth, behavior: "smooth" });
        setScrollPosition("final");
      }
    }
  }

  function SlideBackward() {
    if (newArrivals) {
      const scrollWidth = newArrivals?.offsetWidth;

      if (productCard) {
        newArrivals.scrollTo({ left: -scrollWidth, behavior: "smooth" });
        setScrollPosition("initial");
      }
    }
  }
  return (
    <div className="flex items-center gap-4">
      <button
        className={`w-8 h-6 lg:w-9 lg:h-7 rounded-md shadow-2xl ${
          scrollPosition === "initial"
            ? "bg-primary/40 cursor-default"
            : "bg-primary/80 cursor-pointer"
        }  flex justify-center items-center`}
        aria-label="Slide left"
        onClick={SlideBackward}
      >
        <ChevronLeft className="w-4 h-4 text-white" />
      </button>
      <button
        className={` w-8 h-6 lg:w-9 lg:h-7 rounded-md shadow-2xl ${
          scrollPosition === "final"
            ? "bg-primary/40 cursor-default"
            : "bg-primary/80 cursor-pointer"
        }  flex justify-center items-center`}
        aria-label="Slide right"
        onClick={SlideForward}
      >
        <ChevronRight className="w-4 h-4 text-white" />
      </button>
    </div>
  );
};

export default Carouselsbtn;
