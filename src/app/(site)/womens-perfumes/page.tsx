import ProductCard from "../components/categoriesComponent/product";
import Pagination from "../components/categoriesComponent/pagination";
import CategoryHeader from "../components/categoriesComponent/categoryheader";
import OtherProducts from "../components/categoriesComponent/OtherProducts";
import Link from "next/link";
const WomenFragrance = () => {
  return (
    <section className="flex lg:flex-row flex-col-reverse items-start gap-y-6 mt-10 px-4 lg:px-10">
      <OtherProducts />

      <div className="w-full lg:w-[80%] lg:px-14 min-h-80">
        <div className="font-inter text-xs font-medium text-gray-700 w-full lg:max-w-[60%] mt-1">
          <Link href="/">Home</Link> &gt; Women&apos;s Perfume
        </div>
        <h1 className="font-inter font-bold text-xl mt-3">
          Women&apos;s Perfume In Nigeria
        </h1>
        <p className="font-inter text-[13px] font-medium text-gray-700 max-w-[90%] mt-1">
          Shop women&apos;s perfumes in Nigeria. From timeless classics to
          modern bestsellers with fast delivery across Nigeria
        </p>

        <CategoryHeader route="women" />

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

export default WomenFragrance;
