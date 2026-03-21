import Image from "next/image";
function CollectionCard() {
  return (
    <div className="lg:w-[20%] max-w-[500px] min-h-80 border border-gray-200 pb-3 shrink-0 snap-start relative rounded-sm ">
      <div className="absolute top-2 left-2 w-8 h-8 rounded-[50%] bg-primary/60 flex justify-center items-center">
        <p className="text-[11px] font-inter font-bold text-snow">HOT</p>
      </div>
      <div className="w-full max-w-[500px] ">
        <Image
          src="/burbery.webp"
          alt="burbery"
          height={500}
          width={500}
          className="w-full h-auto"
        />
      </div>

      <div className="px-2 mt-2">
        <h2 className="font-inter text-[12px] font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap">
          Paris Corner Burberry Goddess EDP 100ml
        </h2>
        <p className="text-gray-500 font-semibold font-inter text-[11px] whitespace-nowrap overflow-ellipsis overflow-hidden">
          Paris Corner
        </p>

        <p className="font-inter font-bold text-[12px] mt-1">₦54,000.00</p>
      </div>
    </div>
  );
}

export default CollectionCard;
