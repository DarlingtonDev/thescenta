import Link from "next/link";
import ProductCard from "../components/categoriesComponent/product";

const Search = async ({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) => {
  const { q } = await searchParams;

  const ProductsFound = () => {
    return (
      <div className="mt-7">
        <h2 className="font-inter text-[13px] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
          Search Results For <b>{q}</b>
        </h2>

        <div className="mt-3 flex gap-3 flex-wrap">
          <ProductCard button={false} />
          <ProductCard button={false} />
          <ProductCard button={false} />
          <ProductCard button={false} />
          <ProductCard button={false} />
        </div>
      </div>
    );
  };

  const DefaultComponent = () => {
    return (
      <div>
        {" "}
        <div className="mt-8  min-h-50 text-center flex justify-center items-center font-inter font-medium">
          <h2>Search for products in our catalogs</h2>
        </div>
      </div>
    );
  };

  const NoResult = () => {
    return (
      <div className="mt-8  min-h-50 text-center flex justify-center items-center font-inter font-medium">
        <h2>
          Your search for <b>&apos;Paris Corner In The Moon EDP&apos;</b> was
          not found
        </h2>
      </div>
    );
  };
  return (
    <section className="lg:px-36 px-4 mt-6">
      <p className="font-inter text-xs font-medium text-gray-700 w-full lg:max-w-[60%] mt-1">
        <Link href="/">Home</Link> &gt; Search {q && `> ${q || ""}`}
      </p>

      <h1 className="text-xl font-inter font-semibold mt-3">Search</h1>

      <form action="" className="mt-2 flex gap-1.5 w-full lg:w-fit">
        <input
          aria-label="Search Products"
          type="text"
          className="border border-gray-300 outline-0 py-3 lg:py-2 px-3 font-inter text-xs lg:w-96 w-[75%]"
          placeholder="Search Products"
        />
        <button className="bg-primary/80 text-xs font-medium font-inter py-1 text-snow px-5 rounded-sm cursor-pointer">
          Search
        </button>
      </form>

      {q ? <ProductsFound /> : <DefaultComponent />}
    </section>
  );
};

export default Search;
