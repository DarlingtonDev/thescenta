import Image from "next/image";
const OffersSecond = () => {
  return (
    <div className="snap-start w-full shrink-0 lg:w-[30%] min-h-96  bg-primary/10 flex flex-col items-center rounded-sm">
      <p className="mt-9 font-inter font-bold lg:font-medium text-center text-[11px] tracking-wide">
        BUY ANY TWO PERFUME <br />
      </p>

      <h2 className="mt-1 text-base font-bold font-inter">BUNDLE & SAVE</h2>

      <h3 className="font-inter text-[11px] font-medium mt-1 tracking-wide">
        AND GET 2% OFF
      </h3>
      <button className="mt-3 bg-black py-2 font-inter text-xs font-medium px-3 text-snow cursor-pointer">
        Shop Now
      </button>

      <Image
        src="/offers/parfum-standing.png"
        className="mt-4"
        alt="Image of perfumes"
        width={500}
        height={100}
      />
    </div>
  );
};

export default OffersSecond;
