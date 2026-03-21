import ProductCard from "../../components/categoriesComponent/product";
import Image from "next/image";
import Link from "next/link";
const UniqueProduct = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  return (
    <section className=" mt-5 px-5 lg:px-36">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className="w-full lg:w-[40%]">
          <p className="font-inter text-xs font-medium text-gray-700 mt-1 capitalize overflow-hidden whitespace-nowrap text-ellipsis">
            <Link href="/">Home</Link> &gt; {slug.replaceAll("-", " ")}
          </p>

          <div className="min-h-80 border border-gray-300 mt-4 w-full">
            <Image
              src="/burbery.webp"
              alt="burbery"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="w-full lg:w-[60%] py-6">
          <div className="py-3 border-b border-dotted border-gray-300">
            <p className="font-inter text-[11px] font-medium text-gray-700 mt-1 capitalize overflow-hidden whitespace-nowrap text-ellipsis">
              Paris Corner
            </p>
            <h1 className="mt-1 font-inter font-bold lg:max-w-[80%] text-xl">
              {" "}
              Paris Corner Burberry Goddess EDP 100ml
            </h1>
            <h2 className="mt-1 font-inter font-bold text-primary text-base">
              ₦54,000.00
            </h2>
          </div>

          <div className="border-b border-dotted min-h-44 border-gray-300 py-5">
            <h2 className="font-inter font-bold text-sm">Description:</h2>
            <p className="mt-1 font-inter text-[13px] font-medium">
              Mango Jugosu is a captivating fragrance that combines the
              sweetness of ripe tropical mangoes with a smooth, modern twist
              that lingers beautifully on the skin. Crafted for men and women
              who love to stand out, this scent opens with a burst of juicy
              freshness that immediately draws attention, while its warm
              undertones create a sophisticated balance that feels both youthful
              and elegant. Whether worn casually during the day or reserved for
              evening outings, Mango Jugosu is designed to leave a lasting
              impression everywhere you go.
            </p>
          </div>

          <div className="mt-4">
            <p className="font-inter text-xs text-gray-600">Quantity</p>

            <div className="flex gap-2 mt-2">
              <button
                className="cursor-pointer font-inter font-bold border px-4 py-1.5 lg:px-2.5 rounded-[8px] text-xs lg:py-1 text-gray-700"
                aria-label="Decrease cart quatity"
              >
                -
              </button>
              <button className="cursor-pointer font-inter font-bold border px-4 py-1.5 lg:px-2.5 rounded-[8px] text-xs lg:py-1 text-gray-700">
                0
              </button>
              <button
                className="cursor-pointer font-inter font-bold border px-4 py-1.5 lg:px-2.5 rounded-[8px] text-xs lg:py-1 text-gray-700"
                aria-label="Increase cart quatity"
              >
                +
              </button>
            </div>

            <div className="mt-7 flex gap-5">
              <button className="bg-primary/80 px-16 rounded-sm py-2.5 text-white font-inter text-xs cursor-pointer">
                Add To Cart
              </button>
              <button className="border border-gray-400 px-5 rounded-sm py-2 font-inter text-xs cursor-pointer">
                Add To Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 py-5">
        <h2 className="font-inter font-bold">Perfumes you may like</h2>

        <div className="mt-3 flex gap-3 flex-wrap">
          <ProductCard button={false} />
          <ProductCard button={false} />
          <ProductCard button={false} />
          <ProductCard button={false} />
        </div>
      </div>
    </section>
  );
};

export default UniqueProduct;
