import Image from "next/image";
const Offers = () => {
  return (
    <div className="snap-start lg:w-[30%] shrink-0 w-full min-h-96  bg-primary/20 flex flex-col items-center rounded-sm">
      <h4 className="text-center mt-8 font-inter font-bold lg:font-medium tracking-wide text-[11px]">
        SHOP AND ENJOY
      </h4>

      <h2 className="text-center font-semibold font-poppins text-base mt-1 ">
        FREE DELIVERY
      </h2>
      <h3 className="text-center font-inter font-medium text-[11px] tracking-wide mt-0.5"></h3>

      <h2 className="font-inter text-[11px] font-medium mt-1">
        ON ORDERS ABOVE ₦250,000
      </h2>
      <button className="mt-3 bg-black py-2 font-inter text-xs font-medium px-3 text-snow cursor-pointer">
        Shop Now
      </button>

      <Image
        src="/offers/still-life-perfume.png"
        className="mt-4"
        alt="Image of perfumes"
        width={500}
        height={100}
      />
    </div>
  );
};

export default Offers;
