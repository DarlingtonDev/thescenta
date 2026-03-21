"use client";
import {
  FolderOpen,
  LayoutDashboard,
  LogOut,
  ShoppingBag,
  Tag,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const path = usePathname();
  console.log(path);
  return (
    <aside className="w-[15%] fixed left-8 top-20 bottom-0  h-vh flex flex-col gap-5">
      <Link
        href="/admin"
        className={`flex gap-2 items-center  w-fit ${
          path === "/admin" && "text-primary"
        }  `}
      >
        <LayoutDashboard className=" w-4 h-4" />
        <h2 className="text-[13px] font-inter font-medium">Dashboard</h2>
      </Link>

      <Link
        href="/admin/posts"
        className={`flex gap-2 items-center  w-fit ${
          path === "/admin/posts"
            ? "text-primary"
            : path === "/admin/posts/new-post" && "text-primary"
        }  `}
      >
        <FolderOpen className=" w-4 h-4" />
        <h2 className="text-[13px] font-inter font-medium">Posts</h2>
      </Link>

      <Link
        href="/admin/products"
        className={`flex gap-2 items-center  w-fit ${
          path.startsWith("/admin/products") && "text-primary"
        }  `}
      >
        <Tag className=" w-4 h-4" />
        <h2 className="text-[13px] font-inter font-medium">Products</h2>
      </Link>

      <Link
        href="/admin/orders"
        className={`flex gap-2 items-center  w-fit ${
          path === "/admin/orders" && "text-primary"
        }  `}
      >
        <ShoppingBag className=" w-4 h-4" />
        <h2 className="text-[13px] font-inter font-medium">Orders</h2>
      </Link>

      <Link
        href="/admin/customers"
        className={`flex gap-2 items-center  w-fit ${
          path === "/admin/customers" && "text-primary"
        }  `}
      >
        <UsersRound className=" w-4 h-4" />
        <h2 className="text-[13px] font-inter font-medium">Customers</h2>
      </Link>

      <Link href="" className="mt-auto w-fit flex gap-2 items-center pb-4">
        <LogOut className="text-gray-600 w-4 h-4" />
        <h2 className="text-[13px] font-inter font-medium">Logout</h2>
      </Link>
    </aside>
  );
};

export default Sidebar;
