import Image from "next/image";

const Wishlist = () => {
  const EmptyWishlist = () => {
    return (
      <div className="w-full mt-4 min-h-72 flex flex-col gap-y-4 font-inter text-[13px] font-medium justify-center items-center">
        <h2>You have no products in your wishlist</h2>
        <button className="bg-primary/80 text-white px-2 py-1.5 cursor-pointer">
          Start Shopping
        </button>
      </div>
    );
  };
  const WishlistComponent = () => {
    return (
      <div className="w-full min-h-fit py-1.5 lg:py-6 border px-1 border-gray-200 rounded-md gap-y-4 flex flex-col lg:flex-row items-end">
        <div className="w-full lg:w-[80%] flex gap-x-2 items-center">
          <div className="w-[40%] lg:w-[20%]">
            <Image
              src="/burbery.webp"
              alt="burbery"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>

          <div className="lg:w-[80%] w-[60%] font-inter">
            <h2 className="line-clamp-2 text-[13px] font-medium">
              Paris Corner Burberry Goddess EDP 100ml
            </h2>

            <p className="line-clamp-2 text-xs font-medium text-gray-600 mt-1">
              Paris Corner
            </p>
            <h2 className="mt-1 text-[13px] font-bold w-full overflow-hidden text-ellipsis whitespace-nowrap">
              ₦132,000.00
            </h2>
          </div>
        </div>

        <div className="flex gap-x-6 items-center px-3  font-inter text-[13px]">
          <button className="text-primary font-semibold cursor-pointer">
            Remove
          </button>
          <button className="bg-primary lg:py-1 py-1.5 px-3 text-snow lg:rounded-sm cursor-pointer">
            Add to cart
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="mt-4 px-4 lg:px-40 py-6 w-full">
      <h1 className="font-inter lg:text-xl font-semibold text-lg ">
        Wishlist (0)
      </h1>

      {/* <div className="flex flex-col gap-y-5 mt-4">
        <WishlistComponent />
        <WishlistComponent />
      </div> */}

      <EmptyWishlist />
    </section>
  );
};

export default Wishlist;
