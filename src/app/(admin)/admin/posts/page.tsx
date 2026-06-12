import Pagination from "@/app/(site)/components/categoriesComponent/pagination";
import { EllipsisIcon, Funnel } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Posts = () => {
  const PostList = () => {
    return (
      <>
        <div className="lg:hidden border-t border-gray-200 px-4 py-3 font-inter">
          <div className="flex items-start justify-between gap-2">
            <div className="flex gap-2 items-center min-w-0 flex-1">
              <input type="checkbox" />
              <div className="w-8 shrink-0">
                <Image
                  src="/logo (2).png"
                  alt="thescenta logo image"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-[50%]"
                />
              </div>
              <p className="text-[11px] font-inter font-bold text-gray-700 line-clamp-2">
                The Scenta Store
              </p>
            </div>
            <EllipsisIcon className="w-4 h-4 shrink-0" />
          </div>
          <div className="mt-2 space-y-1 text-[11px] font-inter font-medium text-gray-700">
            <p>
              <span className="text-gray-500">Post Title: </span>
              Best Unisex Affordable Perfumes
            </p>
            <p>
              <span className="text-gray-500">Date Posted: </span>
              27 Jun 2025 : 08: 32
            </p>
            <div className="flex gap-4">
              <p>
                <span className="text-gray-500">Likes: </span>8 Likes
              </p>
              <p>
                <span className="text-gray-500">Views: </span>400 views
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-full border-t border-gray-200 font-inter py-2 items-center">
          <div className="flex gap-x-2 px-2 items-center w-[25%]">
            <input type="checkbox" />
            <div className="w-[15%] shrink-0 ">
              <Image
                src="/logo (2).png"
                alt="thescenta logo image"
                width={500}
                height={500}
                className="w-full h-auto rounded-[50%]"
              />
            </div>

            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font w-[80%] text-gray-700 font-bold">
              The Scenta Store
            </p>
          </div>

          <div className="w-[25%] text-gray-700  px-2">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium">
              Best Unisex Affordable Perfumes
            </p>
          </div>

          <div className="w-[25%] text-gray-700  px-2">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium">
              27 Jun 2025 : 08: 32
            </p>
          </div>

          <div className="w-[8%] text-gray-700  px-2">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium">
              8 Likes
            </p>
          </div>
          <div className="w-[8%] text-gray-700  px-2">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-inter font-medium">
              400 views
            </p>
          </div>
          <div className="w-[8%]  flex justify-center px-2">
            <EllipsisIcon className="w-4 h-4" />
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="w-full lg:ml-[15%] lg:w-[85%] px-4 sm:px-6 bg-gray-50 mt-14 py-6">
      <h2 className="font-inter text-sm font-semibold">All Posts (15)</h2>

      <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-x-3">
        <Link
          href="/admin/posts/new-post"
          className="font-inter text-xs bg-primary text-white py-1.5 px-3 rounded-sm hover:bg-primary/90 transition-colors"
        >
          Add new post
        </Link>
        <button className="flex gap-x-1 rounded-sm text-xs font-medium border border-gray-300 px-2 py-1 ">
          <Funnel className="w-4 h-4" />
          Filter
        </button>
      </div>

      <div className="mt-5 w-full bg-white min-h-96 rounded-md border border-gray-300">
        <div className="hidden lg:flex border-b border-gray-300 w-full font-inter text-xs font-medium py-3 items-center">
          <div className="w-[25%] flex px-2 gap-x-2 items-center ">
            <p>Author&apos;s Name</p>
          </div>

          <div className="w-[25%] flex px-2 ">
            <p>Post Title</p>
          </div>

          <div className="w-[25%] flex px-2 ">
            <p>Date Posted</p>
          </div>

          <div className="w-[8%] flex px-2 ">
            <p>Likes</p>
          </div>

          <div className="w-[8%] flex px-2  ">
            <p>Views</p>
          </div>

          <div className="w-[8%] flex px-2  justify-center ">
            <p>Action</p>
          </div>
        </div>

        <div className="flex flex-col">
          <PostList />
          <PostList />
          <PostList />
          <PostList />
          <PostList />
          <PostList />
          <PostList />
          <PostList />
          <PostList />
          <PostList />
          <PostList />
          <PostList />
          <PostList />
          <PostList />
          <PostList />
        </div>
      </div>

      <div className="-mt-2">
        <Pagination />
      </div>
    </div>
  );
};

export default Posts;
