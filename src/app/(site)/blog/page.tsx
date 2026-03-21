import { Mail, RefreshCw, Share } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../components/categoriesComponent/pagination";

const BlogHome = () => {
  const FeaturedPost = () => {
    return (
      <div className="flex gap-2 max-h-30">
        <div className="w-[40%] h-24 relative">
          <Image src="/blog.jpg" alt="blog" fill className="rounded-md " />
        </div>

        <div>
          <p className="font-inter text-xs text-gray-500 font-medium">
            August 29, 2025
          </p>
          <p className="font-inter text-sm max-w-[90%] mt-2 font-semibold">
            Top summer scents for men and women
          </p>
        </div>
      </div>
    );
  };
  const BlogComponent = () => {
    return (
      <div className="w-full lg:w-[30%] shrink-0 lg:shrink min-h-40 snap-start">
        <div className="h-36 border-gray-300 w-full border relative">
          <Image src="/blog.jpg" alt="blog" fill className="object-cover " />
        </div>
        <div className="mt-2 flex gap-1 items-center font-inter text-xs px-2">
          <div className="w-5 h-5 border border-gray-200 rounded-[50%]">
            <Image
              src="/logo (2).png"
              alt="thescenta logo image"
              width={100}
              height={100}
            />
          </div>

          <h2 className="text-gray-600">Thescenta</h2>
        </div>

        <div className="mt-2 px-2">
          <h2 className="line-clamp-2 font-inter font-semibold">
            How to Crack System Design Interviews in 2025? Preparation
          </h2>

          <p className="mt-3 font-inter text-[13px] text-gray-600 line-clamp-2">
            By Shayda Rahgozar (Recruiting), Nishant Roy (Engineer) and Indy
            Prentice, (Engineer) (Engineer) (Engineer) (Engineer)
          </p>
        </div>

        <div className="mt-5 flex w-full justify-between font-inter text-xs items-center px-2">
          <p>May 19, 2022</p>
          <button className="cursor-pointer" aria-label="Share blog post">
            <Share className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="mt-2 px-4 lg:px-8 ">
      <div className="py-5 lg:py-16 flex flex-col items-center justify-center gap-3">
        <div className="font-inter text-xs font-medium text-gray-700 max-w-[60%] mt-1 text-center">
          <Link href="/">Home</Link> &gt; Blog
        </div>
        <h1 className="text-xl font-inter font-semibold mt-3 text-center lg:text-start">
          Discover Perfume News, Trends & Guides
        </h1>
        <p className="lg:max-w-[70%] text-center font-inter text-[13px]">
          Stay updated with the latest perfume trends and fragrance tips.
          Explore expert guides, product updates, and helpful insights made for
          perfume lovers like you.
        </p>
        <form action="" className="mt-2 flex gap-1.5 w-full lg:w-fit">
          <input
            aria-label="Seach products"
            type="text"
            className="border border-gray-300 outline-0 py-3 lg:py-2 px-3 font-inter text-xs lg:w-96 rounded-sm lg:rounded-md w-[75%]"
            placeholder="Search Our Blog"
          />
          <button className="bg-primary/80 text-xs font-medium font-inter py-1 text-snow px-3 rounded-sm cursor-pointer">
            Find Now
          </button>
        </form>
      </div>

      <div className="flex px-3 mt-4 lg:mt-0 flex-col lg:flex-row gap-y-16">
        <div className="w-full scroll-hidden lg:w-[75%] flex gap-x-6 gap-y-6 lg:flex-wrap overflow-x-auto snap-x snap-mandatory scroll-smooth">
          <BlogComponent />
          <BlogComponent />
          <BlogComponent />
          <BlogComponent />
          <BlogComponent />
          <BlogComponent />
        </div>

        <div className="flex gap-x-1.5 mt-1 items-center self-center lg:hidden">
          <div className="w-4 h-4 border border-primary cursor-pointer flex justify-center items-center rounded-[50%]">
            <div className="w-2.5 h-2.5 rounded-[50%] bg-primary "></div>
          </div>

          <div className="w-4 h-4 flex justify-center items-center">
            <div className="w-2.5 h-2.5 rounded-[50%] bg-gray-200"></div>
          </div>

          <div className="w-4 h-4 flex justify-center items-center">
            <div className="w-2.5 h-2.5 rounded-[50%] bg-gray-200"></div>
          </div>
          <div className="w-4 h-4 flex justify-center items-center">
            <div className="w-2.5 h-2.5 rounded-[50%] bg-gray-200"></div>
          </div>
          <div className="w-4 h-4 flex justify-center items-center">
            <div className="w-2.5 h-2.5 rounded-[50%] bg-gray-200"></div>
          </div>
          <div className="w-4 h-4 flex justify-center items-center">
            <div className="w-2.5 h-2.5 rounded-[50%] bg-gray-200"></div>
          </div>
        </div>

        <div className="lg:w-[25%] w-full">
          <div>
            <div className="flex gap-2 items-baseline">
              <h2 className="font-inter font-medium text-sm">Featured</h2>
              <div className="w-[90%] border-b h-0 border-gray-100"></div>
            </div>
            <div className="flex flex-col gap-5 mt-4">
              <FeaturedPost />
              <FeaturedPost />
            </div>
          </div>

          <div>
            <div className="flex gap-2 items-baseline mt-8 lg:mt-5">
              <h2 className="font-inter font-medium text-sm">Latest</h2>
              <div className="w-[90%] border-b h-0 border-gray-100"></div>
            </div>
            <div className="flex flex-col gap-5 mt-4">
              <FeaturedPost />
            </div>
          </div>

          <div>
            <div className="flex gap-2 items-baseline mt-8 lg:mt-5">
              <h2 className="font-inter font-medium text-sm">Subscribe</h2>
              <div className="w-[90%] border-b h-0 border-gray-100"></div>
            </div>

            <div className="mt-4 bg-gray-100 py-6 px-3 min-h-52 rounded-xl">
              <h2 className="font-inter font-medium text-base max-w-[80%]">
                Blunt pencils are really pointless
              </h2>
              <p className="mt-2 font-inter text-gray-500 text-xs max-w-[80%]">
                Subscribe to our newsletter for all the latest updates
              </p>
              <form action="" className="mt-3 flex flex-col">
                <div className="relative w-full ">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="outline-0 border border-gray-500 bg-white text-xs px-8 py-3 rounded-md font-inter font-medium w-full"
                  />
                  <Mail className="absolute top-1/2 -translate-y-1/2 left-1.5 text-gray-500 w-5 h-5" />
                </div>

                <button className="bg-primary/80 mt-3 font-inter text-xs text-white py-2 rounded-md">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Pagination />
    </section>
  );
};

export default BlogHome;
