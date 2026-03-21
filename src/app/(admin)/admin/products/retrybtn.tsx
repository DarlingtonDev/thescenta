"use client";
const Retrybtn = () => {
  return (
    <button
      className="bg-black text-white text-xs font-inter w-fit mt-2 px-3 py-1.5 rounded-md cursor-pointer"
      onClick={() => window.location.reload()}
    >
      Retry
    </button>
  );
};

export default Retrybtn;
