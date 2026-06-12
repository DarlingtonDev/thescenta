"use client";
import {
  FolderOpen,
  LayoutDashboard,
  LogOut,
  ShoppingBag,
  Tag,
  UsersRound,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({
  isOpen = false,
  onClose,
}: {
  isOpen?: boolean;
  onClose?: () => void;
}) => {
  const path = usePathname();

  const handleNavClick = () => {
    onClose?.();
  };

  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
          aria-label="Close navigation menu"
        />
      )}

      <aside
        className={`fixed left-0 top-16 bottom-0 z-50 flex flex-col gap-5 bg-white px-4 py-4 w-56 shadow-lg lg:shadow-none lg:left-8 lg:top-20 lg:w-[15%] lg:bg-transparent lg:px-0 transition-transform duration-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <button
          type="button"
          className="lg:hidden self-end p-1"
          onClick={onClose}
          aria-label="Close navigation menu"
        >
          <X className="w-4 h-4" />
        </button>

        <Link
          href="/admin"
          onClick={handleNavClick}
          className={`flex gap-2 items-center w-fit ${
            path === "/admin" && "text-primary"
          }`}
        >
          <LayoutDashboard className="w-4 h-4" />
          <h2 className="text-[13px] font-inter font-medium">Dashboard</h2>
        </Link>

        <Link
          href="/admin/posts"
          onClick={handleNavClick}
          className={`flex gap-2 items-center w-fit ${
            path === "/admin/posts"
              ? "text-primary"
              : path === "/admin/posts/new-post" && "text-primary"
          }`}
        >
          <FolderOpen className="w-4 h-4" />
          <h2 className="text-[13px] font-inter font-medium">Posts</h2>
        </Link>

        <Link
          href="/admin/products"
          onClick={handleNavClick}
          className={`flex gap-2 items-center w-fit ${
            path.startsWith("/admin/products") && "text-primary"
          }`}
        >
          <Tag className="w-4 h-4" />
          <h2 className="text-[13px] font-inter font-medium">Products</h2>
        </Link>

        <Link
          href="/admin/orders"
          onClick={handleNavClick}
          className={`flex gap-2 items-center w-fit ${
            path === "/admin/orders" && "text-primary"
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          <h2 className="text-[13px] font-inter font-medium">Orders</h2>
        </Link>

        <Link
          href="/admin/customers"
          onClick={handleNavClick}
          className={`flex gap-2 items-center w-fit ${
            path === "/admin/customers" && "text-primary"
          }`}
        >
          <UsersRound className="w-4 h-4" />
          <h2 className="text-[13px] font-inter font-medium">Customers</h2>
        </Link>

        <Link
          href=""
          onClick={handleNavClick}
          className="mt-auto w-fit flex gap-2 items-center pb-4"
        >
          <LogOut className="text-gray-600 w-4 h-4" />
          <h2 className="text-[13px] font-inter font-medium">Logout</h2>
        </Link>
      </aside>
    </>
  );
};

export default Sidebar;
