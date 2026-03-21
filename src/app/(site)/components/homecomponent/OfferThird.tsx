import Image from "next/image";
const OfferThird = () => {
  return (
    <div className="snap-start w-full shrink-0 lg:w-[30%] min-h-96 bg-cyan-600/10 flex flex-col items-center rounded-sm">
      <p className="mt-8 font-inter font-bold lg:font-medium text-center text-[11px] tracking-wide">
        GET 3% OFF
      </p>

      <h2 className="mt-1 text-base font-bold font-inter">WELCOME10</h2>
      <h3 className="font-inter text-[11px] font-medium mt-1 tracking-wide text-center">
        USE THE CODE - <b>WELCOME10</b>
      </h3>
      <button className="mt-3 bg-black py-2 font-inter text-xs font-medium px-3 text-snow cursor-pointer">
        Shop Now
      </button>

      <Image
        src="/offers/perfume-flower.png"
        className="mt-6"
        alt="Image of perfumes"
        width={500}
        height={100}
      />
    </div>
  );
};

export default OfferThird;
