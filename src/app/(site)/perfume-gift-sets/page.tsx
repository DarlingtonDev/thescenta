import CategoryHeader from "../components/categoriesComponent/categoryheader";
import ProductCard from "../components/categoriesComponent/product";
import Pagination from "../components/categoriesComponent/pagination";
import OtherProducts from "../components/categoriesComponent/OtherProducts";
import Link from "next/link";

const Giftset = () => {
  return (
    <section className="flex lg:flex-row flex-col-reverse items-start gap-y-6 mt-10 px-4 lg:px-10">
      <OtherProducts />

      <div className="w-full lg:w-[80%] lg:px-14 min-h-80">
        <div className="font-inter text-xs font-medium text-gray-700 max-w-[60%] mt-1">
          <Link href="/">Home</Link> &gt; Gift Sets
        </div>
        <h1 className="font-inter font-bold text-xl mt-3">
          {" "}
          Gift Sets In Nigeria
        </h1>
        <p className="font-inter text-[13px] font-medium text-gray-700 max-w-[90%] mt-1">
          Find perfume gifts in Nigeria. Ideal for birthdays, anniversaries and
          special occasions.
        </p>

        <CategoryHeader route="gift set" />

        <div className="flex flex-wrap gap-x-2 gap-y-4 mt-7">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <Pagination />
      </div>
    </section>
  );
};

export default Giftset;
