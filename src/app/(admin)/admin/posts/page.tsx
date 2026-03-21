import Pagination from "@/app/(site)/components/categoriesComponent/pagination";
import { EllipsisIcon, Funnel } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Posts = () => {
  const PostList = () => {
    return (
      <div className="w-full flex border-t border-gray-200  font-inter py-2  items-center">
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
    );
  };

  return (
    <div className="ml-[15%] px-6 w-[85%] bg-gray-50 mt-14 py-6">
      <h2 className="font-inter text-sm font-semibold">All Posts (15)</h2>

      <div className="mt-3 flex items-center gap-x-3">
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
        <div className=" border-b border-gray-300 flex w-full font-inter text-xs font-medium py-3 items-center">
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
