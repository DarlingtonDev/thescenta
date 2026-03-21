import { Eye, Share, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const UniqueBlog = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  return (
    <article className="lg:px-36 w-full items-center mt-8 lg:mt-14 flex flex-col px-5">
      <div className="w-full lg:max-w-[60%]">
        <div className="font-inter text-xs font-medium text-gray-700 max-w-[60%] mt-1 ">
          <Link href="/">Home</Link> &gt; <Link href="/">Blog</Link> &gt; {slug}
        </div>
        <h1 className="text-3xl font-inter font-black leading-11 mt-4">
          How to Crack System Design Interviews in 2025? Preparation Tips,
          Questions and Resources
        </h1>
        <p className="mt-4 font-inter lg:text-base text-sm text-gray-600">
          Your guide to prepare for System design interviews in 2025 with
          resources and get into FAANG
        </p>

        <div className="lg:mt-4 mt-6 flex gap-y-5 lg:gap-10 font-inter text-[13px] flex-col lg:flex-row">
          <div className="flex gap-1 items-center">
            <div className="w-10 h-10 border border-gray-200 rounded-[50%]">
              <Image
                src="/logo (2).png"
                alt="thescenta logo image"
                width={100}
                height={100}
              />
            </div>
            <h2>Thescenta</h2>
          </div>

          <div className="flex gap-3 items-center ">
            <p>13 min read</p>
            <div className="w-1 h-1 bg-gray-500"></div>
            <p>May 19, 2022</p>
          </div>
        </div>

        <div className="mt-6 py-3 border-t border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex gap-1 items-center">
              <ThumbsUp className="w-4 h-4" aria-label="Likes" />
              <p className="font-inter text-[13px]">19</p>
            </div>

            <div className="flex gap-1 items-center">
              <Eye className="w-4 h-4" aria-label="Views" />
              <p className="font-inter text-[13px]">200</p>
            </div>
          </div>

          <button className="cursor-pointer" aria-label="Share Post">
            <Share className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-16"></div>
      </div>
    </article>
  );
};

export default UniqueBlog;
