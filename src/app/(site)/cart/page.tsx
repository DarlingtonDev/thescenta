import { Trash2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Cart = () => {
  const Empty = () => {
    return (
      <div className="w-full mt-4 min-h-72 flex flex-col gap-y-4 font-inter text-[13px] font-medium justify-center items-center">
        <h2>You have no products in your cart</h2>
        <button className="bg-primary/80 text-white px-2 py-1.5 cursor-pointer">
          Start Shopping
        </button>
      </div>
    );
  };

  const CartProduct = () => {
    return (
      <div className="w-full min-h-80 flex flex-col gap-x-8 gap-y-10 lg:flex-row items-start">
        <div className="w-full lg:w-[80%]">
          <div className="flex lg:mt-4 mt-6 border-b border-gray-200 font-inter text-[13px] font-medium pb-1">
            <div className=" w-[80%] lg:w-[60%]">Items</div>
            <div className="w-[20%]">Qty</div>
            <div className="lg:w-[20%] hidden lg:block">Subtotal</div>
          </div>
          <div className="flex font-inter text-[13px] font-medium items-center py-3 gap-x-4 lg:gap-x-0">
            <div className="mt-3 w-[90%] lg:w-[60%] flex px-2 gap-x-4 items-center">
              <div className="w-[40%] items-center lg:w-[30%] border border-gray-300">
                <Image
                  src="/burbery.webp"
                  alt="burbery"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              <div className="w-[60%] mt-2">
                <h2 className="line-clamp-2 text-xs text-gray-600">
                  Paris Corner Burberry Goddess EDP 100ml
                </h2>
                <h2 className="mt-1.5 font-bold w-full overflow-hidden text-ellipsis whitespace-nowrap">
                  ₦132,000.00
                </h2>

                <button
                  className="cursor-pointer rounded-sm text-xs mt-2 text-white flex items-center gap-x-1 bg-primary/80 py-1.5 px-3.5"
                  aria-label="Delete cart item"
                >
                  <Trash2Icon className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="mt-3 w-[20%] min-w-0">
              <input
                aria-label="Products Quantity"
                type="number"
                defaultValue={1}
                min={1}
                className="w-14 border border-gray-300 outline-0 px-1 py-1 rounded-sm"
              />
            </div>
            <div className="mt-3 w-[20%] hidden lg:block">
              <p>₦320,000.00</p>
            </div>
          </div>
          <div className="flex font-inter text-[13px] font-medium items-center py-3 gap-x-4 lg:gap-x-0">
            <div className="mt-3 w-[90%] lg:w-[60%] flex px-2 gap-x-4 items-center">
              <div className="w-[40%] items-center lg:w-[30%] border border-gray-300">
                <Image
                  src="/burbery.webp"
                  alt="burbery"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              <div className="w-[60%] mt-2">
                <h2 className="line-clamp-2 text-xs text-gray-600">
                  Paris Corner Burberry Goddess EDP 100ml
                </h2>
                <h2 className="mt-1.5 font-bold w-full overflow-hidden text-ellipsis whitespace-nowrap">
                  ₦132,000.00
                </h2>

                <button
                  className="cursor-pointer rounded-sm text-xs mt-2 text-white flex items-center gap-x-1 bg-primary/80 py-1.5 px-3.5"
                  aria-label="Delete cart item"
                >
                  <Trash2Icon className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="mt-3 w-[20%] min-w-0">
              <input
                aria-label="Products Quantity"
                type="number"
                defaultValue={1}
                min={1}
                className="w-14 border border-gray-300 outline-0 px-1 py-1 rounded-sm"
              />
            </div>
            <div className="mt-3 w-[20%] hidden lg:block">
              <p>₦320,000.00</p>
            </div>
          </div>
          <div className="flex font-inter text-[13px] font-medium items-center py-3 gap-x-4 lg:gap-x-0">
            <div className="mt-3 w-[90%] lg:w-[60%] flex px-2 gap-x-4 items-center">
              <div className="w-[40%] items-center lg:w-[30%] border border-gray-300">
                <Image
                  src="/burbery.webp"
                  alt="burbery"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              <div className="w-[60%] mt-2">
                <h2 className="line-clamp-2 text-xs text-gray-600">
                  Paris Corner Burberry Goddess EDP 100ml
                </h2>
                <h2 className="mt-1.5 font-bold w-full overflow-hidden text-ellipsis whitespace-nowrap">
                  ₦132,000.00
                </h2>

                <button
                  className="cursor-pointer rounded-sm text-xs mt-2 text-white flex items-center gap-x-1 bg-primary/80 py-1.5 px-3.5"
                  aria-label="Delete cart item"
                >
                  <Trash2Icon className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="mt-3 w-[20%] min-w-0">
              <input
                aria-label="Products Quantity"
                type="number"
                defaultValue={1}
                min={1}
                className="w-14 border border-gray-300 outline-0 px-1 py-1 rounded-sm"
              />
            </div>
            <div className="mt-3 w-[20%] hidden lg:block">
              <p>₦320,000.00</p>
            </div>
          </div>
          <div className="flex font-inter text-[13px] font-medium items-center py-3 gap-x-4 lg:gap-x-0">
            <div className="mt-3 w-[90%] lg:w-[60%] flex px-2 gap-x-4 items-center">
              <div className="w-[40%] items-center lg:w-[30%] border border-gray-300">
                <Image
                  src="/burbery.webp"
                  alt="burbery"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              <div className="w-[60%] mt-2">
                <h2 className="line-clamp-2 text-xs text-gray-600">
                  Paris Corner Burberry Goddess EDP 100ml
                </h2>
                <h2 className="mt-1.5 font-bold w-full overflow-hidden text-ellipsis whitespace-nowrap">
                  ₦132,000.00
                </h2>

                <button
                  className="cursor-pointer rounded-sm text-xs mt-2 text-white flex items-center gap-x-1 bg-primary/80 py-1.5 px-3.5"
                  aria-label="Delete cart item"
                >
                  <Trash2Icon className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="mt-3 w-[20%] min-w-0">
              <input
                aria-label="Products Quantity"
                type="number"
                defaultValue={1}
                min={1}
                className="w-14 border border-gray-300 outline-0 px-1 py-1 rounded-sm"
              />
            </div>
            <div className="mt-3 w-[20%] hidden lg:block">
              <p>₦320,000.00</p>
            </div>
          </div>
        </div>

        <div className="min-h-fit border border-gray-300 w-[95%] mx-auto lg:w-[25%] px-4 py-6 rounded-xl">
          <h2 className="font-inter text-base font-semibold border-b border-b-gray-200 py-4">
            Summary
          </h2>

          <div className="flex flex-col gap-y-1">
            <div className="flex justify-between mt-5 font-inter lg:text-xs text-[13px]">
              <div>Subtotal</div>
              <div className="font-medium"> ₦164,000.00</div>
            </div>

            <div className="flex justify-between mt-5 font-inter lg:text-xs text-[13px]">
              <div>Shipping Cost</div>
              <div className="font-medium"> ₦5,000.00</div>
            </div>

            <div className="flex justify-between mt-5 font-inter lg:text-xs text-[13px]">
              <div>Discount(0%)</div>
              <div className="font-medium"> ₦0.00</div>
            </div>

            <div className="flex justify-between mt-5 font-inter lg:text-xs text-[13px] border-b border-gray-200 pb-3">
              <div>Tax(0%)</div>
              <div className="font-medium"> ₦0.00</div>
            </div>

            <div className="flex justify-between mt-5 font-inter lg:text-xs text-[13px] border-b border-gray-200 pb-3">
              <div className="font-semibold">Total</div>
              <div className="font-semibold"> ₦169,000.00</div>
            </div>

            <button className="rounded-md bg-primary mt-4 lg:py-2 py-3 text-white font-inter text-xs cursor-pointer">
              Checkout
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="mt-4 lg:px-36 px-5">
      <p className="font-inter text-xs font-medium text-gray-700 max-w-[60%] mt-1 ">
        <Link href="/">Home</Link> &gt; Cart
      </p>

      <h1 className="mt-4 lg:mt-4 font-inter text-lg lg:text-xl font-semibold">
        Shopping Cart
      </h1>

      <CartProduct />

      <button className="mt-4 lg:mt-0 font-inter text-[13px] py-2 rounded-sm px-3 text-primary font-semibold cursor-pointer">
        &lt; Continue Shopping
      </button>
    </section>
  );
};

export default Cart;
